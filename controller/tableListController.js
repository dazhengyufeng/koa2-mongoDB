//  引入user数据库
const TableList = require('../models/tableList')
const Router = require('koa-router');
const router = new Router();

//  增加
router.post('/tableList/add', async (ctx, next) => {
    // 获取post请求的请求体
    let tableData = ctx.request.body 
    // 通过对原型Model1使用new方法，实例化出文档document对象
    let newTableData = new TableList(tableData);
    // 存储到数据库
    await newTableData.save();
    ctx.response.body = '数据添加成功'
})

// 删除
router.post('/delectTableData',async function(ctx){
    if(ctx.request.body.length == 1){
        await TableList.deleteOne({ '_id': ctx.request.body[0]}).then(res => {
            ctx.response.body = res
        })
    }else if(ctx.request.body.length > 1){
        for(let i = 0;i < ctx.request.body.length;i ++){
           await TableList.deleteOne({ '_id': ctx.request.body[i]})
        }
        ctx.response.body = '批量删除成功'
    }
})

//  查询
router.post('/tableList', async (ctx, next) => {
    // ctx.request.body.name (获取参数)
    await TableList.find().limit(ctx.request.body.size).skip((ctx.request.body.page-1) * 20).then(res => {
        ctx.response.body = res
    })
})

//  修改
router.post('/updateTableList',async (ctx, next) => {
    await TableList.update(
        {"_id": ctx.request.body._id},
        {"$set": ctx.request.body}
    ).then(res => {
        ctx.response.body = res
    })
})

module.exports = router;