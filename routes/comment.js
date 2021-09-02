const express = require('express');
const router = express.Router();
const commentController = require('../controllers/api/comment');
const auth = require('../helper/auth');

// POST : /api/:postId/comment
router.post('/api/:uuid/comments',auth, commentController.createComment);


module.exports = router;