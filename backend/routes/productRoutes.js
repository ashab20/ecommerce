const express = require('express');
const { getAllProduct, createProduct, updateProductById, deleteProduct, getOneProduct } = require('../controller/productsControllers');
const routes = express.Router();

//* create product route
// ! By Admin
routes.route('/product/new').post(createProduct);

//* Update produce by Id
// ! By Admin
routes.route('/product/update/:id').put(updateProductById);

// ! Admin Delete a product
routes.route('/product/:id').delete(deleteProduct);

//* get all product 
routes.route('/products').get(getAllProduct).get(getOneProduct);

//? get One Product
routes.route('/product/:id').get(getOneProduct);

module.exports = routes;