const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
require('dotenv').config();
const { sequelize } = require('./models');
const { storage, fileFilter } = require('./helper/multer');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api-docs/api.yaml');
const swaggerUI = require('swagger-ui-express');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));


app.use(multer({ storage , fileFilter }).single('image'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Blog API" })
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    // sequelize.sync({ force: true})
    console.log('Database Synced');
});