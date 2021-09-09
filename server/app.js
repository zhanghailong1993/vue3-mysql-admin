const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const query = require('./util/mysql-async.js')
const router = require('./routes/index.js')
//MySQLZhhl

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
app.use(router.routes())

app.listen(3333)
