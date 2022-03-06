const Product = require('../modleSchema/productSchema');
const ErrorHandler = require('../utils/errorHandler');
const asyncFunc = require('../middleWare/asyncFunc.js');
const ApiFeature = require('../utils/apiFeature');

// ? Admin Create Product
exports.createProduct = asyncFunc(async(req,res, next) => {
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
    const resultPerPage = 5;
    const ProductCount = Product.countDocuments();
    const apiFeature = new ApiFeature(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const product = await apiFeature.query;
    res.status(200).json({success: true, product});
})

// get one product by id
exports.getOneProduct = asyncFunc(async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    if(!product) return next(new ErrorHandler('Cannot find this product',404))
    res.status(200).json({success: true, product,ProductCount});
})