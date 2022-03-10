const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    
    shippingInfo:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        State:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        zipCode:{
            type:Number,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
            minlength:10,
            maxlength:11,
    }
    },
    orderItems:[
        {
            product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:[true,"cannot find product"],
            },
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },

        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true,"cannot find user"],
    },
    paymentInfo:{
        id:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    },
    paidAt:{
        type:Date,
        required:true
    },
    itemsPrice:{
        type:Number,
        required:true,
        default:0
    },
    tax:{
        type:Number, 
        required:true,
        default:0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Processing"
    },
    deliveredAt:{
        Type:Date
    },
    CreateAt: {
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('Order', orderSchema);