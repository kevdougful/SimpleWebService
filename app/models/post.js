'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    // Schemas can be much more complicated...
    author: String,
    content: String
});

module.exports = mongoose.model('Post', PostSchema);