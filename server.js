'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to DB
mongoose.connect('Database URL');

// Define routes
var blogRoutes = require('./app/routes/blog.js');
app.use('/api/blogs', blogRoutes);

// Set Port
var port = process.env.PORT || 3000;

// Start up the server
app.listen(port);
console.log('Server running on port ' + port);