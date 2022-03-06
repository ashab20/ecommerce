const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({    
    name:{
        type:String,
        required:[true,"Please enter your full name"],
        min:[40,"Name should be less then 40 character"],
        max:[4,"Type your full name which more then 3 character"]
    },
    username:{
        type:String,
        required:[true,"Please typer a user name"],
        unique:[true,"this user is already exist"],
        trim:true
    },
    email:{
        type:String,
        required:[true, "Please enter Your email addrss"],
        unique:[true,"Email already exist"],
        validate:[validator.isEmail,"Please insert a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        min:[8,"Password should be 8 character long."]
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true,
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPassworToken: String,
    resetPassworExpire:Date
    
});

module.exports = mongoose.model("User", userSchema);