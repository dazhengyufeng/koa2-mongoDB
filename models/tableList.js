'use strict'

const mongoose = require('mongoose')

var TableListSchema = new mongoose.Schema({
    name:String,
    time:String,
    contain:String
});

module.exports = mongoose.model('TableList',TableListSchema)