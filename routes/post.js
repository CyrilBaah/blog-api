const express = require('express');
const router = express.Router();
const postController = require('../controllers/api/post');

router.post('/api/posts', postController.createPost);
router.get('/api/posts', postController.getAllPost);

module.exports = router;