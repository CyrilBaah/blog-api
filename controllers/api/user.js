
exports.signUp = async (req, res) => {
    try {
        const { username, email, image, password, confirmPassword } = req.body;
        console.log(username, email, image, password, confirmPassword);
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}