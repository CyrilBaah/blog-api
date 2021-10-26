const { Post } = require('../../models');
const { User } = require('../../models');

exports.createPost = async (req, res) => {
    try {
        const { title, content, userUuid } = req.body;
        if (!(title && content && userUuid)) {
            res.status(400).json({ success: false, message: "All fields are required" });
        }

        const post = await Post.create({
            title,
            content,
            userUuid 
        });
        return res.status(200).json({ success: true, message: post });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        
        res.status(200).json({ success: true, message: posts });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.getASinglePost = async (req, res) => {
    try {
        const { uuid } = req.params;
        const post = await Post.findOne({ where: { id: uuid } });

        if (post){
            res.status(200).json({ success: true, message: post })
        } 
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.updatePost = async (req, res) => {
    try {
        const { uuid } = req.params;
        const { title, content, userUuid } = req.body;
        const post = await Post.findOne({ where: { id: uuid } });

        if (post){
            post.title = title;
            post.content = content;
            post.userUuid = userUuid;

            post.save();
            res.status(200).json({ message: `Post updated successfully`, post })
        } 
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.deletePost = async (req, res) => {
    try {
        const { uuid } = req.params;
        const post = await Post.findOne({ where: { id: uuid } });

        if (post) {
            post.destroy();
            res.status(204).json({ success: true });
        }
        return res.status(404).json({ success: false, message: `Post doesn't exist`});
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

