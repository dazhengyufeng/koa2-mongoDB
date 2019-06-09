'use strict'
 
const Router = require('koa-router');
const router = new Router();

// var userController = require('../controller/userController');
var tableHeaderController = require('../controller/tableHeaderController');
var tableListController = require('../controller/tableListController');

// router.use(userController.routes());
router.use(tableHeaderController.routes());// 表头路由
router.use(tableListController.routes());// 列表路由


// const ApiRouter = require('./swagger');
// router.use(ApiRouter.routes());


module.exports = router;
