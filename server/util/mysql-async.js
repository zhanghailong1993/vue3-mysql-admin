const mysql = require('mysql')
const config = require('../config/development.js')

let pool = mysql.createPool({
  host: config.db.mysql.host,
  user: config.db.mysql.user,
  password: config.db.mysql.password,
  database: config.db.mysql.database,
  connectionLimit: config.db.mysql.connectionLimit
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) { // not connected!
        return reject(err)
      }
      // Use the connection
      connection.query(sql, values, (error, results) => {
        // When done with the connection, release it.
        connection.release()
     
        // Handle error after the release.
        if (error) {
          return reject(error)
        } else {
          return resolve(results)
        }
      })
    })
  })
}

module.exports = query