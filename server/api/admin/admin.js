const router = require('koa-router')()
const admin = require('./admin.controller')

router.post('/login', admin.login)

module.exports = router