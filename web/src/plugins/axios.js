import axios, { httpErrorMessage } from '../lib/axios'
import store from '../store'
import { ElMessage } from 'element-plus'
import * as utils from '@/utils'

export default function axiosPlugin (app) {

  app.use(axios, {
    interceptors (config) {
      // if (process.env.NODE_ENV !== 'production' && !/^\/(mock|api)/.test(config.url)) {
      //   config.baseURL = '/api'
      // }
      const token = localStorage.getItem('DON_BLOG_TOKEN')
      if (token) {
        // Bearer是JWT的认证头部信息
        config.headers.common['Authorization'] = 'Bearer ' + token
      }
      return config
    },
    responseHandler (data, response) {
      const { errcode } = data || {}
      if (typeof errcode === 'number' && errcode !== 0) {
        return Promise.reject(response)
      }
      return response
    },
    errorHandler (error) {
      if (!error) return
      const { status, data = {} } = error
      /**
       * 请求正常，但返回结果有问题的情况
       */
      if (status === 200) {
        const { message = '', errcode } = data
        const err = new Error(message)
        err.code = errcode
        utils.alertMessage(message)
        return err
      }
      if (error.response) {
        const { status, config, data = {} } = error.response
        const message = (status === 404 ? `${httpErrorMessage[ status ]}:${config.url}` : httpErrorMessage[ status ]) || (data.message && typeof data.message === 'string' ? data.message : '') || error.message || (error.code === 'ECONNABORTED' ? '请求超时,请重试' : '')
        const code = data.code || data.results?.code || error.code || status
        const err = new Error(message)
        err.code = code
        /**
         * 419状态表示登录已失效，需要返回登录页面重新登录
         * 401状态表示未授权，需要返回登录页面重新登录
         */
        if (/4(19|01)/.test(status)) {
          if (config.url.includes('/logout')) return window.location.reload()
          ElMessage({
            showClose: true,
            message: '登录已过期，点击确认刷新',
            type: 'error',
            onClose() {
              location.href = location.origin + '/#/login'
            }
          })
          
          return err
        }
        utils.alertMessage(message)
        return err
      }
      return error
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