const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
require('dotenv').config();
const { sequelize } = require('./models');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.replace(' ','-');
        cb(null, Date.now() + '-' + fileName);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
app.use(multer({ storage , fileFilter }).single('image'));

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Blog API" })
});

const userRoutes = require('./routes/user');
app.use(userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database Synced');
});