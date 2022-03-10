const express = require('express');
const { newOrder, myOrder } = require('../controller/orderController');
const { isAuthentication } = require('../middleWare/authentication');
const routes = express.Router()


routes.route('/order/new').post(isAuthentication,newOrder);
routes.route('/order/me/:id').get(isAuthentication,myOrder);



module.exports = routes ;