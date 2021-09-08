const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const router = require('./routes/index.js')

app.use(cors({
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
app.use(router.routes())

app.listen(3333)