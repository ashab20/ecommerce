const { CreateUser,loginUser, logOut, forgetPassword, resetpassword } = require("../controller/userControllers");
const { isAuthentication } = require('../middleWare/authentication');
const express = require('express');
const router = express.Router();


// create a user
router.route('/registration').post(CreateUser);

// login user
router.route('/login').post(loginUser);

// forget password
router.route('/forgetpassword').post(forgetPassword);

//reset password
router.route('/resetpassword/:token').put(resetpassword);
// logout
router.route('/logout').get(isAuthentication,logOut);

module.exports = router;