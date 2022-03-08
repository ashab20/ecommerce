const mongoose = require('mongoose');
const User = require('./userSchema');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please enter a product name'],
        trim:true,
    },
    description:{
        type:String,
        required:[true, 'Please write a description of product']
    },
    price:{
        type: Number,
        required: [true,'Give the price of product']
    },
    rating:{
        type:Number,
        default:0,
    },
    image:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true,
        }
    },
],    catogory:{
            type:String,
            required:true
    },
    stock:{
        type:Number,
        default:1
    },
    numOfReviws:{
        type:Number,
        default:0,
    },
    review:[
        {
            name:{
                type:String,
                require:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true,"cannot find user"],
        },
    createAt:{
        type:Date,
        default:Date.now,
    }
});


module.exports =  mongoose.model('Product', productSchema);