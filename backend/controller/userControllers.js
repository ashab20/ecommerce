const User = require('../modleSchema/userSchema.js');
const asyncFunc = require("../middleWare/asyncFunc");
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler.js');
const cryptoJs = require('crypto-js');
const crypto = require('crypto');
const sendMail = require('../utils/sendMail');
const { sendToken } = require('../utils/sendToken.js');


// create new user
exports.CreateUser = asyncFunc(async(req,res,next) => {

    const {name,username,email} = req.body;

    const verifyUser = await User.findOne({email,username});
    
    const hashPassword = CryptoJS.AES.encrypt(req.body.password, `${process.env.HASHMESSAGE}`);

    console.log(hashPassword)
    
    if(!verifyUser){
        const user = await User.create({
            name,
            username,
            email,
            password:hashPassword,
            avatar:{
                public_id:"thisissampleid",
                url:"profilepicurl"
            }})
            
    
    const genToken = JWT.sign({id:user._id},process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRE});
    
    const {password,...profile} = user._doc;

    const options ={
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),httpOnly:true,
    }
        res.status(201).cookie('token',genToken,options).json({
            success:true,
            profile,
            genToken
        });
    } else{
        res.status(501).json({success:false, message:`You have already an account!. please try to login`})
    }
});


// get user details
exports.getUser = asyncFunc( async(req,res) => {
    const user = await User.findById(req.user.id);
    const {password,...profile} = user._doc;
    res.status(200).json({
        success:true,
        profile,
    })
})


//* Update user information
exports.UpdateUser= asyncFunc(async (req,res,next) => {

    const {name,username,email} = req.body;
    await User.findOneAndUpdate(req.user.id,
        {name,username,email},
        {new:true,runValidators:true,useFindAndModify:false});

        res.status(201).json({
            success:true,
        })
});

// change password
exports.changePassword = asyncFunc(async (req,res,next) => {

    const user = await User.findById(req.user.id);
    if((req.body.oldPassword && req.body.newPassword && req.body.confirmPassword) ===""){
        return next(new ErrorHandler("Please input your password",400));
    }
    let oldPassword = CryptoJS.AES.decrypt(user.password,`${process.env.HASHMESSAGE}`)
    oldPassword = oldPassword.toString(cryptoJs.enc.Utf8);
    
    if(req.body.oldPassword !== oldPassword){ 
        return next(new ErrorHandler("Icorrect Password!, Please try again",400));
    }
    if(req.body.newPassword !== req.body.confirmPassword){
            return next(new ErrorHandler("Password did not matched!, Please enter currect password",400));
    }

    const hashPassword = CryptoJS.AES.encrypt(req.body.newPassword, `${process.env.HASHMESSAGE}`);

    user.password = hashPassword;
    await user.save();
    sendToken(user.id,201,res);
    
    
})

//* forget update password
exports.forgetPassword = asyncFunc( async (req,res,next) => {
    const {email} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return next(new ErrorHandler(`User not found`,401));
    }

    const resetPassToken = user.resetPasswordToken();
    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/user/resetpassword/${resetPassToken}`

    const message = `Your reset password token is :- \n\n ${resetPasswordUrl} \n\n. If you have not requested password reset. Please ignore this email`;

    try {
        await sendMail({
            email:user.email,
            subject:`${process.env.SITE_NAME} Recovery Password`,
            message
        });

        res.status(200).json({
            success:true,
            message:`Email send to ${user.email} successfully`
        })
    } catch (error) {
        user.resetToken = undefined;
        user.resetExpire = undefined;

    await user.save({validateBeforeSave:false});

    return next(new ErrorHandler(error.message,401));

    }
})

// reset password
exports.resetpassword = asyncFunc( async (req,res,next)  => {
    const resetToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({resetToken,resetExpire:{$gt: Date.now()}});

    if(!user) return next(new ErrorHandler(`Reset Token is invalid or has been expired`,400))
    if(req.body.password !== req.body.confirmPassword) return next(new ErrorHandler(`Password does not matched`,400));

    user.password = CryptoJS.AES.encrypt(req.body.password, `${process.env.HASHMESSAGE}`)
    user.resetToken = undefined;
    user.resetExpire = undefined;

    await user.save();
    sendToken(user.id,201,res);
    

});

// * Login User
exports.loginUser = asyncFunc( async(req,res,next) => {
    const {email,username,password} = req.body;

    if(!(email || username) && !password){
        return next(new ErrorHandler("Please enter email or username and password",400)); }

        const user = await User.findOne({email}) || await User.findOne({username});
        if(!user) return next(new ErrorHandler('Something goes wrong with username or password! or try registration first',401));

        
        let hashPassword = CryptoJS.AES.decrypt(user.password,`${process.env.HASHMESSAGE}`)

        hashPassword = hashPassword.toString(cryptoJs.enc.Utf8);

        if(password === hashPassword){
            sendToken(user.id,201,res);
        }else{
            return next(new ErrorHandler("'Something goes wrong with username or password!, Please input currect user or password"))
        };

    }
);


exports.logOut = asyncFunc(async (req,res,next) => {
    res.cookie('token',null,{expires:new Date(Date.now()),httpOnly:true});

    res.status(200).json({success:true,message:"Logget out"});
});



// ! Get all user by Admin
exports.allUsers = asyncFunc(async (req,res,next) => {
    const users = await User.find();
    // const {password, ...people} = users._doc;

    res.status(200).json({
        success:true,
        users,
    })
})


// ! Get Single user by Admin
exports.oneUser = asyncFunc(async (req,res,next) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`,400))
    }
    // const {password, ...people} = user._doc;

    res.status(200).json({
        success:true,
        user,
    })
})
