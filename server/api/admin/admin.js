const router = require('koa-router')()
const admin = require('./admin.controller')
const category = require('./category.controller')

// 登录
router.post('/login', admin.login)

// 文章分类路由
router.get('/getCategories', category.getCategories)

module.exports = router