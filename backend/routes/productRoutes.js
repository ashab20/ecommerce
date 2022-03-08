const express = require('express');
const { getAllProduct, createProduct, updateProductById, deleteProduct, getOneProduct } = require('../controller/productsControllers');
const { isAuthentication, authorizeRoles } = require('../middleWare/authentication');
const routes = express.Router();

//* get all product 
routes.route('/products').get(isAuthentication, authorizeRoles('admin'),getAllProduct);

//? get One Product
routes.route('/product/:id').get(getOneProduct);

//* create product route
// ! By Admin
routes.route('/product/new').post(isAuthentication, authorizeRoles("admin"),createProduct);

//* Update produce by Id
// ! By Admin
routes.route('/product/update/:id').put(isAuthentication,authorizeRoles('admin'), updateProductById);

// ! Admin Delete a product
routes.route('/product/:id').delete(isAuthentication, authorizeRoles('admin'),deleteProduct);


module.exports = routes;