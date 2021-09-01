const express = require('express');
const router = express.Router();
const userController = require('../controllers/api/user');

router.post('/api/signup', userController.signUp);
router.post('/api/login', userController.Login);

module.exports = router;