import axios from '../lib/axios'

const getCategories = (data) => axios.get('/admin/getCategories', data, { loading: 'loginLoading' }).then(res => res?.data || {})

export default {
  getCategories
}