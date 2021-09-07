const path = require('path')

const pathJoin = (args) => path.join(__dirname, ...Array.from(args))

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@views': pathJoin('./src/views'),
        '@utils': pathJoin('./src/utils')
      }
    }
  }
}