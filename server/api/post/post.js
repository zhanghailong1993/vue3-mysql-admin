const router = require('koa-router')()
const post = require('./post.controller')

// 文章路由路由
router.get('/getPostList', post.getPostList)
router.post('/addPost', post.addPost)
router.post('/deletePost', post.deletePost)
router.post('/publishPost', post.publishPost)
router.post('/offlinePost', post.offlinePost)
router.post('/getPostById', post.getPostById)

module.exports = router