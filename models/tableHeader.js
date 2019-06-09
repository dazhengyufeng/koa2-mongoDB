'use strict'

const mongoose = require('mongoose')

var TableHeaderSchema = new mongoose.Schema({
    name:String,
    value:String,
});

module.exports = mongoose.model('TableHeader',TableHeaderSchema)