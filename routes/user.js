const express = require('express');
const router = express.Router();
const userController = require('../controllers/api/user');

router.post('/api/signup', userController.signUp);

module.exports = router;