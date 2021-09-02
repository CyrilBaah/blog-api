const express = require('express');
const router = express.Router();
const commentController = require('../controllers/api/comment');
const auth = require('../helper/auth');

// POST : /api/:postId/comment
router.post('/api/:uuid/comments',auth, commentController.createComment);

// GET : /api/:postId/comment
router.get('/api/:uuid/comments',auth, commentController.getAllComments);

// PUT : /api/:postId/comment/commentUuid
router.put('/api/:uuid/comments/:commentUuid',auth, commentController.editComment); 

// DELETE : /api/:postId/comment/commentUuid
router.delete('/api/:uuid/comments/:commentUuid',auth, commentController.deleteComment); 

module.exports = router;