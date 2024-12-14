require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// menu
const menuRoutes = require('./routes/menuRoutes');

// order
const orderRoutes = require('./routes/orderRoutes');

// express
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// engine ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// default layout file
app.set('layout', 'layouts/main');

// static file
app.use(express.static(path.join(__dirname, 'public')));

// mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    });

// routes
app.get('/', (req, res) => {
    res.redirect('/menu');
})

app.use('/menu', menuRoutes);

app.use('/order', orderRoutes);

// local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));