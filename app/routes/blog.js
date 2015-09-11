'use strict';

var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');

// Retrieve all Blogs with GET
// GET requests sent to /api/blogs will trigger this code.
router.get('/', function (req, res, next) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            // Pass error to callback
            next(err);
        } else {
            // Send out the JSON from Mongoose
            res.json(blogs);
        }

    });
});

// Retrieve a specific Blog with GET
// GET requests sent to /api/blogs/<blogId> will trigger this code.
router.get('/:blogId', function (req, res, next) {
    Blog.findById(blogId, function (err, blogs) {
        if (err) {
            // Pass error to callback
            next(err);
        } else {
            // Send out the JSON from Mongoose
            res.json(blogs);
        }

    });
});