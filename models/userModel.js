'use strict'

//  创建一个可操作的mongoose.model实例
const mongoose = require('mongoose')

// 账户的数据库模型（初始定义文档结构，相当于定义表结构，也可以说是声明表的一行都有什么字段）
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});

//  创建模型
//  Mongoose会将集合名称设置为模型名称的小写版。如果名称的最后一个字符是字母，则会变成复数；
//  如果名称的最后一个字符是数字，则不变；
module.exports = mongoose.model('User',UserSchema)