const User = require('../modleSchema/userSchema.js');
const asyncFunc = require("../middleWare/asyncFunc");
const cryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');


// create new user
exports.CreateUser = asyncFunc(async(req,res,next) => {

    const {name,username,email} = req.body;

    const verifyUser = await User.findOne({email,username});
    
    const hashPassword = await cryptoJS.AES.encrypt(process.env.HASHMESSAGE,req.body.password);

    
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
    
    const {password,...other} = user._doc;

        res.status(201).json({
            success:true,
            other,
            genToken
        });
    } else{
        res.status(501).json({success:false, message:`You have already an account!. please try to login`})
    }
});


//* Update user information

exports.UpdateUser= asyncFunc(async (req,res,next) => {
    const {name,username,email,password} = req.body;

    const verifyUser = await User.findOne({email,username,password});
    
    // const hashPassword = cryptoJS.AES.encrypt(process.env.HASHMESSAGE,req.body.password);

    const hashPassword = cryptoJS.AES.encrypt(verifyUser.password,process.env.HASHMESSAGE);


    if(verifyUser){
        if(password === hashPassword){        
        const user = await User.findOneAndUpdate({
            name,
            username,
            email});

        res.status(201).json({
            success:true,user
        })
    }
    }else{
        res.status(501).json({success:false, message:`email or username did not matched`})
    }
});

//* Reset or update password
exports.resetPassword = asyncFunc( async (req,res,next) => {
    const {email} = req.body;

    const verifyUser = await User.findOne({email});
    if(!verifyUser){
        await User.updateOne({
            password:hashPassword})

        res.status(201).json({
            success:true,message:"Password success fully updated"
        })
    };
})


// * Login User
// exports.loginUser = asyncFunc((req,res,next) => {
//     const {email,username,password} = req.body;

//         const findUser = await User.findOne({email,username});

//         if(findUser){
//             return true;

//         }else{
//             res.status(501).json({
//             success:false,message: 'User not found'
//         });
//         }

//     }
// );