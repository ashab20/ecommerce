const { 
    deleteUser,
    updateUser,
    allUsers,
    oneUser
} = require("../controller/userControllers");
const { isAuthentication, authorizeRoles } = require('../middleWare/authentication');
const express = require('express');
const { allOrderData, singleOrderData, updateOrderData, DeleteOrderData } = require("../controller/orderController");
const adminRouter = express.Router();

// ! Admin get all users
adminRouter.route('/usrs').get(isAuthentication,authorizeRoles("admin"), allUsers);

// ! Admin get all users
adminRouter.route('/usr/:id').get(isAuthentication,authorizeRoles("admin"), oneUser).put(isAuthentication,authorizeRoles("admin"),updateUser).delete(isAuthentication,authorizeRoles("admin"),deleteUser);

// ! get all Orders
adminRouter.route('/ord/all').get(isAuthentication,authorizeRoles("admin"),allOrderData);

//! get Single Order
adminRouter.route('/odr/:id').get(isAuthentication,authorizeRoles("admin"),singleOrderData).put(isAuthentication,authorizeRoles("admin"),updateOrderData).delete(isAuthentication,authorizeRoles("admin"),DeleteOrderData);

module.exports = adminRouter