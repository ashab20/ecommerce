const ErrorHandler = require('../utils/errorHandler');


module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Cast Error * mongodb error
    if(err.name === 'CastError'){
        const message = `Resource Not found! Invalid Path: ${err.path}`
        err = new ErrorHandler(message,400)
    }
    // duplicate error
    if(err.code === 11000){
         const message = `Duplicate ${Object.keys(err.keyValue)} Entered!`
        err = new ErrorHandler(message,400)
    }

    // json web token error 
     if(err.name === "JsonWebTokenError"){
         const message = `Token is invalid! try again`
        err = new ErrorHandler(message,400)
    }

    // Json web token expired
      if(err.name === "TokenExpiredError"){
         const message = `Token is expired! try again`
        err = new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
}