const express = require('express');
const signUpHandler = require('../authController/SignupController');
const loginHandler = require('../authController/LoginController');

const router = express.Router();


router.route("/register").post(signUpHandler)

router.route("/login").post(loginHandler);     
  module.exports = router 