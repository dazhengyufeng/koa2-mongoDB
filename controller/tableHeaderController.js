const TableHeader = require('../models/tableHeader')
const Router = require('koa-router');
const router = new Router();


//  增加
router.get('/', async (ctx, next) => {
    // // 新增数据
    // var header = {
    //     value: 'contain',
    //     name: '内容',
    // }
    // // 通过对原型Model1使用new方法，实例化出文档document对象
    // var newHeader = new TableHeader(header);
    // // 存储到数据库
    // newHeader.save();
    ctx.response.body = '数据添加成功'
})

//  查询
router.get('/tableHeader', async (ctx, next) => {
    // ctx.request.body.name (获取参数)
    const result = await TableHeader.find({})
    
    ctx.response.body = result
})

module.exports = router;