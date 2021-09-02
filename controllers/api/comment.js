const { Comment } = require('../../models');

exports.createComment = async (req, res) => {
    try {
        const { uuid } = req.params;
        const { content, userUuid } = req.body;

        const comment = await Comment.create({
           content,
           userUuid,
           postUuid: uuid
        });
        res.status(201).json({ success: true, message: comment });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.getAllComments = async (req, res) => {
    try {
        const { uuid } = req.params;
        const comments = await Comment.findAll({ where: { postUuid: uuid } });

        res.status(201).json({ success: true, message: comments });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.editComment = async (req, res) => {
    try {
        const { uuid, commentUuid } = req.params;
        const { content, userUuid } = req.body;

        const comment = await Comment.findOne({ where: { id: commentUuid } })
        if (comment) {
            comment.content = content;
            comment.userUuid = userUuid;
            comment.postUuid = uuid;
            comment.save();
            res.status(201).json({ success: true, message: comment });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}


exports.deleteComment = async (req, res) => {
    try {
        const { commentUuid } = req.params;
        const comment = await Comment.findOne({ where: { id: commentUuid } });

        if (comment) {
            comment.destroy();
            res.status(204).json({ success: true });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}