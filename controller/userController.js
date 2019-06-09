//  引入user数据库
const User = require('../models/userModel')
const Router = require('koa-router');
const router = new Router();

//  此文件是个增删改查的模板和笔记

// test1:增删改查模板
//  增加
router.get('/', async (ctx, next) => {
    // 新增数据
    var user = {
        username: 'ydj',
        password: '123123',
        email: ''
    }
    // 通过对原型Model1使用new方法，实例化出文档document对象
    var newUser = new User(user);
    // 存储到数据库
    newUser.save();
    ctx.response.body = '数据添加成功'
})

// 删除
router.get('/remove',async function(ctx){
    //let code 
    const result = await User.where({
      username:'ydj'
    }).remove()

    ctx.body={
      result
    }
})

//  查询  (此处有获取post请求数据)
router.post('/user', async (ctx, next) => {
    // ctx.request.body.name (获取post请求数据的方法)
    const result = await User.findOne({username: 'ydj'})
    ctx.body = result.toJSON()
})

//  修改
router.get('/update',async (ctx, next) => {
    const result=await User.where({
        username:'ydj'
    }).update({
      password:'456456'
    })
    try {
      await result,
      code=0
    } catch (error) {
      code=-1
    }
    ctx.body={
      code,
      result
    }
  })

//  test2:get请求获取参数和动态路由
router.get('/:id', async (ctx, next) => {
  
  //从ctx中读取get传值，http://localhost:3000/news?id=1&title=aaa获取这样请求的参数
  console.log(ctx.url);   // /news?id=1&title=aaa
  console.log(ctx.query);  // { id: '1', title: 'aaa' } 获取的是对象   用的最多的方式      ******推荐
  console.log(ctx.querystring);  // id=1&title=aaa      获取的是一个字符串

})

// test3:中间
// 中间件说明：
// 1：执行顺序：洋葱结构 => 中间件会先逐级处理request请求，然后再返回来逐级处理response请求
//    具体流程：中间件 => 匹配路由 => 中间件
// 2：作用：处理404和用户登录
// 3：必须加await next();,如果不写next，这个路由被匹配到了就不会继续向下匹配

// 中间件会在匹配其他路由钱最先执行
app.use(async (ctx,next)=>{
     await next();
    //如果页面找不到
     if(ctx.status==404){
         ctx.status = 404;
         ctx.body="404 页面"
      }
 });

 //test4:ejs模板引擎和页面渲染的使用
 // ？？？？？？

 //test5:koa-static静态资源中间件
 // ？？？？？？

 //test6:koa的cookie和session
 // ？？？？？？

module.exports = router;