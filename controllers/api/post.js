const { Post } = require('../../models');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!(title && content)) {
            res.status(400).json({ success: false, message: "All fields are required" });
            res.exit(0);
        }

        const post = await Post.create({
            title,
            content 
        });
        return res.status(200).json({ success: true, message: post });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}