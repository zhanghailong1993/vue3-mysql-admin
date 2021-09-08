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
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}