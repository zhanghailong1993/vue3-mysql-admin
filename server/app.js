const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const mysql = require('mysql')
const bodyParser = require('koa-bodyparser')
const router = require('./routes/index.js')

const config = require('./config/development.js')

let pool = mysql.createPool({
  host: config.db.mysql.host,
  user: config.db.mysql.user,
  password: config.db.mysql.password,
  database: config.db.mysql.database,
  connectionLimit: config.db.mysql.connectionLimit
})

pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!
 
  // Use the connection
  connection.query('SELECT * FROM user_data', function (error, results, fields) {
    // When done with the connection, release it.
    connection.release();
 
    // Handle error after the release.
    if (error) throw error;
    
    console.log(results)
    // Don't use the connection here, it has been returned to the pool.
  })
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
