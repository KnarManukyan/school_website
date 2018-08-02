var express = require('express');
var router = express.Router();
const loginController = require('../controller/login.js');

router.post('/login',loginController.login)

module.exports = router;
