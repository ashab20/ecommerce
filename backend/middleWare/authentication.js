const asyncFunc = require("./asyncFunc");
const JWT = require('jsonwebtoken');
const ErrorHandler = require("../utils/errorHandler");
const User = require("../modleSchema/userSchema");

exports.isAuthentication = asyncFunc(async (req,res,next) => {
    const {token} = req.cookies;
    
    if(!token) return next(new ErrorHandler("Please login first to access this resource",401));

    const decoder = JWT.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoder.id);
    next();
})

exports.authorizeRoles = (...roles) => {
    return (req,res,next) => {
    if(!roles.includes(req.user.role)) {
        return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403))
    }
        
        
        next();
    }

}