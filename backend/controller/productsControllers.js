const Product = require('../modleSchema/productSchema');
const ErrorHandler = require('../utils/errorHandler');
const asyncFunc = require('../middleWare/asyncFunc.js');
const ApiFeature = require('../utils/apiFeature');
const User = require('../modleSchema/userSchema');
const JWT = require('jsonwebtoken');

// ? Admin Create Product
exports.createProduct = asyncFunc(async(req,res, next) => {
    req.body.user = req.user.id
    const products =  await Product.create(req.body);
    res.status(200).json({
        success:true,
        products,
    })
});

// ? Admin Update product by id
exports.updateProductById = asyncFunc(async (req,res, next) => {
    let products =  await Product.findById(req.params.id);

    if(!products) return next(new ErrorHandler('Cannot find this product',404))

    products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        products,
    })
});

// ? Admin Delete Product by id
exports.deleteProduct = asyncFunc(async(req,res,next) => { 
        let products =  await Product.findById(req.params.id);
        
        if(!products) return next(new ErrorHandler('Cannot find this product',404))
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:'Product deleted successfully'
        })
    });


//* get all prouct
exports.getAllProduct = asyncFunc(async(req,res,next) => {
    const resultPerPage = 8;
    const ProductCount = await Product.countDocuments();
    const apiFeature = new ApiFeature(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const product = await apiFeature.query;
    res.status(200).json({success: true, product,ProductCount});
})

// get one product by id
exports.getOneProduct = asyncFunc(async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    if(!product) return next(new ErrorHandler('Cannot find this product',404))
    res.status(200).json({success: true, product});
});

exports.getReview = asyncFunc(async (req,res,next) => {
    
});


// ! ********* REVIEWS **********

// create product review @USER
exports.createReview = asyncFunc( async (req,res,next) => {
    const { _id ,name} = req.user;
    const { rating, comment, ProductId } = req.body;
    const review = {
        user:_id,name,rating: Number(rating),comment
    }

    const product = await Product.findById(ProductId);
    const isReviewed = product.reviews.find( rev=> rev.user.toString()=== _id.toString());

    if(isReviewed){
        product.reviews.forEach((rev) => {
            if(rev.user.toString()=== _id.toString())
            (rev.rating = rating),(rev.comment = comment);
        });
    }else{
        product.reviews.push(review);
        product.numOfReviws = product.reviews.length
    }

    let count = 0;

    product.reviews.forEach((rev) => {
        count += rev.rating;
    });
    
    product.ratings = count / product.reviews.length;

    await product.save({validateBeforeSave:false});
    res.status(200).json({
        success:true
    })
});

//? get all reviews
exports.allReviews = asyncFunc(async (req,res,next) => {
    const product = await Product.findById(req.query.id);

    if(!product){
        next(new ErrorHandler(`Product not found`,404));
    }

    res.status(200).json({success:true,reviews :product.reviews})
})

//? Delete reviews


exports.deleteReviews = asyncFunc(async (req,res,next) => {
    const product = await Product.findById(req.query.ProductId);

    if(!product){
        next(new ErrorHandler(`Product not found`,404));
    }
    const reviews = product.reviews.filter(rev=> rev._id.toString() !== req.query.id.toString())
    
    let count = 0;
    reviews.forEach((rev) => {
        count += rev.rating;
    });
    
    const ratings = count / reviews.length;
    const numOfReviws = reviews.length;

    await Product.findByIdAndUpdate(req.query.ProductId,
        {reviews,ratings,numOfReviws},
        {new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({success:true,reviews})
});