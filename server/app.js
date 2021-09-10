const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')
const query = require('./util/mysql-async.js')
const router = require('./routes/index.js')
const config = require('./config/development.js')

//MySQLZhhl

app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 419
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err
    }
  })
})

app.use(async (ctx, next) => {
  ctx.execSql = query
  ctx.salt = 'secret'
  await next()
})

app.use(cors({
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(bodyParser())

app.use(koajwt({ secret: config.tokenSecret }).unless({
  path: [/^\/api\/admin\/login/]
}))

app.use(router.routes())

app.listen(3333)
