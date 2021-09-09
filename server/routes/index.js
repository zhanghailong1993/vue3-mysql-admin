const router = require('koa-router')()
const post = require('../api/post/post')
const admin = require('../api/admin/admin')

router.use('/api/post', post.routes(), post.allowedMethods())
router.use('/api/admin', admin.routes(), admin.allowedMethods())

module.exports = router