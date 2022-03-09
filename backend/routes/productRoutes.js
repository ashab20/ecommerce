const express = require('express');
const { getAllProduct, createProduct, updateProductById, deleteProduct, getOneProduct } = require('../controller/productsControllers');
const { isAuthentication, authorizeRoles } = require('../middleWare/authentication');
const routes = express.Router();


// ? *********** Get Methods ************

//* get all product 
routes.route('/products').get(isAuthentication,getAllProduct);

//* get all product 
// ! admin
routes.route('/admin/products').get(isAuthentication, authorizeRoles('admin'),getAllProduct);

//? get One Product
routes.route('/product/:id').get(getOneProduct);

//? get One Product
// ! admin
routes.route('/admin/product/:id').get(isAuthentication, authorizeRoles('admin'),getOneProduct);



// ? *********** POST Methods ************

//* create product route
// ! By Admin
routes.route('/admin/product/new').post(isAuthentication, authorizeRoles("admin"),createProduct);


// ? *********** PUT Methods ************

//* Update produce by Id
// ! By Admin
routes.route('/admin/product/update/:id').put(isAuthentication,authorizeRoles('admin'), updateProductById);


// ? *********** DELETE Methods ************
// ! Admin Delete a product
routes.route('/admin/product/:id').delete(isAuthentication, authorizeRoles('admin'),deleteProduct);


module.exports = routes;