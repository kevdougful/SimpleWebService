'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Blog', BlogSchema);