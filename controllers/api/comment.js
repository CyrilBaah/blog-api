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