const router = require('koa-router')()
const post = require('./post.controller')

// 文章路由路由
router.get('/getPostList', post.getPostList)
router.post('/addPost', post.addPost)

module.exports = router