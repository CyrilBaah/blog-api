const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        const image = req.file;
        if (!(username && email && password && confirmPassword)) {
            res.status(400).json({ success: false, message: `All fields are required` });
            res.exit(0);
        }

        if (!image) {
            res.status(400).json({ success: false, message: `Image is required` });
            res.exit(0);
        }

        if (password !== confirmPassword) {
            res.status(400).json({ success: false, message: `Password does't match` });
            res.exit(0);
        }

        const user = await User.findOne({ where: { email } });
        if (user) {
            res.status(400).json({ success: false, message: `User already exist` });
        } else {
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                image: image.path,
                password: encryptedPassword,
            });
            res.status(201).json({ success:true, message: user });
        }
        res.status(400).json({ success: false, message: user });
    } catch (error) {
        console.log(error);
        res.status(200).json({ success: false, message: error });
    }
}