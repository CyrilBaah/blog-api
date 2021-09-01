const { Post } = require('../../models');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    
}