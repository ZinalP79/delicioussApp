const express = require('express');
const controller = require('../controllers/user');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/user/signup', controller.createUser);
router.post('/user/login', controller.loginuser);
router.post('/user/logout', auth, controller.logout);

module.exports = router;
