require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const session = require('express-session');
const minifyHTML = require('express-minify-html');
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session Declaration
app.use(session({
    secret: process.env.SESSIONPASS,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 12 * 3600 * 1000
    }
}));

// Minify HTML
app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

// Uncomment this code with DBURL parameter in .env file to connect with database

//Database URL
const DBURL = process.env.DBURL;

//Connecting Database
mongoose.connect(DBURL, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));


// EJS Engine Setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setting Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Sample Controller Routes
app.use('/home',require('./controllers/home'));

app.listen(PORT, () => {
    console.log("Server is running on port : ",PORT);
});