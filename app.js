const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
require('dotenv').config();
const { sequelize } = require('./models');
const { storage, fileFilter } = require('./helper/multer');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));


app.use(multer({ storage , fileFilter }).single('image'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Blog API" })
});


const userRoutes = require('./routes/user');
app.use(userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    // sequelize.sync({ force: true})
    console.log('Database Synced');
});