const JWT = require('jsonwebtoken');


exports.sendToken = (id,statusCode,res) => {
    const genToken = JWT.sign({
                id},
                process.env.JWT_SECRET,
                {expiresIn:process.env.JWT_EXPIRE});

        
    const options ={
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),httpOnly:true,
    }
        res.status(statusCode).cookie('token',genToken,options).json({
            success:true,
            message:'login successfully',
            genToken
        });
}