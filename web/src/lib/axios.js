import axios from 'axios'
// https://www.itying.com/koa/article-index-id-88.html
const isFunction = t => typeof t === 'function'

const TIMEOUT = 20 * 1e3 // 超时时间20s

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.install = (app, options = {}) => {
  console.log(app)
  const { interceptors, responseHandler, setLoading = {} } = options

  if (interceptors) {
    axios.interceptors.request.use(config => interceptors(config))
  }

  axios.interceptors.response.use(response => {
    if (isFunction(responseHandler)) return responseHandler(response.data, response)
    return response
  }, error => {
    return Promise.reject(error)
  })
  
  if (process.env.VUE_APP_API_URL) {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL
  }

  axios.defaults.withCredentials = true

  axios.defaults.timeout = TIMEOUT

  // 包装方法，统一添加loading状态, 处理CancelToken
  const handleWrap = (handle, settings) => {
    const { loading: loadingField } = settings.options ?? {}
    // 开启loading
    loadingField && setLoading(loadingField, true)

    return new Promise((resolve, reject) => {
      handle(settings.url, settings.params).then(data => {
        resolve(data)
        // 请求结束之后关闭loading
        loadingField && setLoading(loadingField, false)
      }, error => {
        // 请求结束之后关闭loading
        loadingField && setLoading(loadingField, false)
        reject(error)
      })
    })
  }

  // 包装get方法，使其参数传递方式与post请求一致
  const axiosGet = axios.get
  axios.get = (url, params, options) => handleWrap((url, params) => axiosGet(url, {
    params
  }), {
    url,
    params,
    options
  })
  // 包装post方法, 添加loading状态
  const axiosPost = axios.post
  axios.post = (url, params, options) => handleWrap(axiosPost, {
    url,
    params,
    options
  })
}

export default axios