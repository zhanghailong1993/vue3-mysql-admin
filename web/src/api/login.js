import axios from '../lib/axios'

const login = (data) => axios.post('/admin/login', data, { loading: 'loginLoading' }).then(res => res?.data || {})

export default {
  login
}