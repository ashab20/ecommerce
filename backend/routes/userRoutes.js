const { 
    CreateUser,
    loginUser,
    logOut,
    forgetPassword,
    resetpassword,
    getUser,
    changePassword,
    UpdateUser, 
    allUsers,
    oneUser
} = require("../controller/userControllers");
const { isAuthentication, authorizeRoles } = require('../middleWare/authentication');
const express = require('express');
const router = express.Router();

// ! Admin get all users
router.route('/admin/users').get(isAuthentication,authorizeRoles("admin"), allUsers);

// ! Admin get all users
router.route('/admin/user/:id').get(isAuthentication,authorizeRoles("admin"), oneUser);


// create a user
router.route('/registration').post(CreateUser);

// login user
router.route('/login').post(loginUser);

// get user details/profile
router.route('/profile').get(isAuthentication,getUser);

// update user
router.route('/update').put(isAuthentication,UpdateUser);

// change password
router.route('/changepassword').put(isAuthentication,changePassword)

// forget password
router.route('/forgetpassword').post(forgetPassword);

//reset password
router.route('/resetpassword/:token').put(resetpassword);
// logout
router.route('/logout').get(isAuthentication,logOut);

module.exports = router;