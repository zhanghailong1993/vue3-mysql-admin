import axios from '../lib/axios'

const getPostList = (data) => axios.get('/post/getPostList', data, { loading: 'loginLoading' }).then(res => res?.data || {})

/**发布文章**/
const addPost = (data) => axios.post('/post/addPost', data).then(res => res?.data || {})

/**删除文章**/
const deletePost = (data) => axios.post('/post/deletePost', data).then(res => res?.data || {})

/**发布文章**/
const publishPost = (data) => axios.post('/post/publishPost', data).then(res => res?.data || {})

/**下线文章**/
const offlinePost = (data) => axios.post('/post/offlinePost', data).then(res => res?.data || {})

/**获取文章详情**/
const getPostById = (data) => axios.post('/post/getPostById', data).then(res => res?.data || {})

export default {
  getPostList,
  addPost,
  deletePost,
  publishPost,
  offlinePost,
  getPostById
}