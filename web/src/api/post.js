import axios from '../lib/axios'

const getPostList = (data) => axios.get('/post/getPostList', data, { loading: 'loginLoading' }).then(res => res?.data || {})

/**发布文章**/
const addPost = (data) => axios.post('/post/addPost', data).then(res => res?.data || {})

export default {
  getPostList,
  addPost
}