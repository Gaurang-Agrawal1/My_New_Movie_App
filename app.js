const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const dbConnect = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const listRoutes = require('./routes/listRoutes');
const { isAuth } = require('./middleware/authMiddleware');

dotenv.config();
dbConnect();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/movies',isAuth, movieRoutes);
app.use('/lists', isAuth, listRoutes);


app.get('/', (req, res) => {
    res.redirect('/auth/login');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
