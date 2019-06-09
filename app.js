const Koa = require('koa')
const app = new Koa()
// 引入mongoose
const mongoose = require("mongoose");

// 引入koa-bodyparser用于获取post参数
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

//  处理跨域
const cors = require('koa2-cors')
app.use(cors({
    "Access-Control-Allow-Origin": '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

//  链接本地mongodb的testDb数据库
const db = mongoose.connect("mongodb://localhost/testDB",function(err) {
    if(err){ 
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
    }
});

//  引入路由
const router = require('./config/router.js');
//  使用路由，必需有必须是这种格式
app.use(router.routes()).use(router.allowedMethods());

app.listen(1996)