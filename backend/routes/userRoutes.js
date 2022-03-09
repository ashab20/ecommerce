const { 
    CreateUser,
    loginUser,
    logOut,
    forgetPassword,
    resetpassword,
    getUser,
    changePassword,
    updateProfile, 
} = require("../controller/userControllers");
const { isAuthentication } = require('../middleWare/authentication');
const express = require('express');
const router = express.Router();

// create a user
router.route('/registration').post(CreateUser);

// login user
router.route('/login').post(loginUser);

// get user details/profile
router.route('/profile').get(isAuthentication,getUser);

// update user
router.route('/update').put(isAuthentication,updateProfile);

// change password
router.route('/changepassword').put(isAuthentication,changePassword)

// forget password
router.route('/forgetpassword').post(forgetPassword);

//reset password
router.route('/resetpassword/:token').put(resetpassword);
// logout
router.route('/logout').get(isAuthentication,logOut);

module.exports = router;