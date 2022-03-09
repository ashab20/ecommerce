const { 
    deleteUser,
    updateUser,
    allUsers,
    oneUser
} = require("../controller/userControllers");
const { isAuthentication, authorizeRoles } = require('../middleWare/authentication');
const express = require('express');
const adminRouter = express.Router();

// ! Admin get all users
adminRouter.route('/usrs').get(isAuthentication,authorizeRoles("admin"), allUsers);

// ! Admin get all users
adminRouter.route('/usr/:id').get(isAuthentication,authorizeRoles("admin"), oneUser).put(isAuthentication,authorizeRoles("admin"),updateUser).delete(isAuthentication,authorizeRoles("admin"),deleteUser);


module.exports = adminRouter