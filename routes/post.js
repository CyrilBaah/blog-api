const express = require('express');
const router = express.Router();
const postController = require('../controllers/api/post');
const auth = require('../helper/auth');

router.post('/api/posts',auth, postController.createPost);
router.get('/api/posts',auth, postController.getAllPost);
router.get('/api/posts/:uuid',auth, postController.getASinglePost);


module.exports = router;