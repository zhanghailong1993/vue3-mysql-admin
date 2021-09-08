import axios from '../lib/axios'
import store from '../store'

export default function axiosPlugin (app) {

  app.use(axios, {
    interceptors (config) {
      if (process.env.NODE_ENV !== 'production' && !/^\/(mock|api)/.test(config.url)) {
        config.baseURL = '/api'
      }
      const token = localStorage.getItem('DON_BLOG_TOKEN')
      if (token) {
        // Bearer是JWT的认证头部信息
        config.headers.common['Authorization'] = 'Bearer ' + token
      }
      return config
    },
    responseHandler (data, response) {
      console.log(data, response)
    },
    errorHandler (error) {
      if (!error) return
    },
    setLoading (key, value) {
      if (key) {
        store.commit('setLoading', {
          [key]: value
        })
      }
    }
  })
}