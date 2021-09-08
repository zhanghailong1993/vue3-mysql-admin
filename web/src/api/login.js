import axios from '../lib/axios'

const login = (data) => axios.post('/admin/login', data, { loading: 'loginLoading' }).then(data => {
  console.log(data)
})

export default {
  login
}