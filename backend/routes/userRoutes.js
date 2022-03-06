const { CreateUser } = require("../controller/userControllers");

const express = require('express');
const router = express.Router();


// create a user
router.route('/registration').post(CreateUser);


module.exports = router;