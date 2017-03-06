import axios from 'axios'

export const configureAxios = () => {
  axios.defaults.baseURL = 'http://localhost:3001/api'
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.put['Content-Type'] = 'application/json'
}
