const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Blog API" })
});

const userRoutes = require('./routes/user');
app.use(userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});