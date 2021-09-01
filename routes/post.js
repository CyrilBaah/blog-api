const express = require('express');
const router = express.Router();
const postController = require('../controllers/api/post');

router.post('/api/post', postController.createPost);

module.exports = router;