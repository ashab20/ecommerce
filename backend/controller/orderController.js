const Order = require('../modleSchema/orderSchema');
const asyncFunc = require("../middleWare/asyncFunc.js");
const ErrorHandler = require('../utils/errorHandler');
const Product = require('../modleSchema/productSchema');


// ? Create Order
exports.newOrder = asyncFunc(async (req,res,next) => {

    const { 
        shippingInfo,
        orderItems,
        paymentInfo, 
        itemsPrice, 
        tax,
        shippingPrice, 
        totalPrice, 
    } = req.body;


    const order = await Order.create({shippingInfo,
        orderItems,
        paymentInfo, 
        itemsPrice, 
        tax,
        shippingPrice, 
        totalPrice, paidAt:Date.now(),user:req.user._id});


        res.status(200).json({
            success:true,
            order,
        })
});



// get all Order
exports.singleOrderData = asyncFunc(async (req,res,next) => {
    const order = await Order.findById(req.params.id).populate("user","name email");
    if(!order){
        return next(new ErrorHandler(`Order is not found`,404));
    }

    res.status(200).json({
        success:true,
        order
    })

});

// get logget user order 
exports.myOrder = asyncFunc(async (req,res,next) => {
    const orders = await Order.find({user:req.user._id});

    res.status(200).json({
        success:true,
        orders
    })

});

// ! get all Order @admin
exports.allOrderData = asyncFunc(async (req,res,next) => {
    const order = await Order.find();
    let totalAmount = 0;

    order.forEach(odr => {
        totalAmount +=odr.totalPrice; 
    })

    res.status(200).json({
        success:true,
        totalAmount,
        order
    });

});



// ! update Order @admin
exports.updateOrderData = asyncFunc(async (req,res,next) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        return next(new ErrorHandler(`Order not found with this id`,404))
    }

    if(order.orderStatus ==="Delivered"){
        return next(new ErrorHandler(`You have already delivered this order`,400))
    }
    console.log(await order.orderItems.quantity)
   await order.orderItems.forEach(async order=>{
            await updateStocke(order.product,order.quantity)
        });

    console.log(req.body.status);
    order.orderStatus = req.body.status;
        
    if(order.orderStatus ==="Delivered"){
        order.deliveredAt = Date.now();
    }
    await order.save({validateBeforeSave:false})

    res.status(200).json({
        success:true,
        order
    });

});

// Stock function
async function updateStocke(id,quantity){
    const product = await Product.findById(id);
    product.stock -= quantity;

    await product.save();
}


// ! delete Order @admin
exports.DeleteOrderData = asyncFunc(async (req,res,next) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if(!order){
        return next(new ErrorHandler(`Order not found with this id`,404))
    }
    res.status(200).json({
        success:true,
        message:"Order has been deleted"
    });

});
