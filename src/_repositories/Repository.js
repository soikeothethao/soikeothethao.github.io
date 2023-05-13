import axios from 'axios'
import { API_KEY, API_URL, API_HOST } from '../_constants'

const baseURL = `${API_URL}`
const apiKey = `${API_KEY}`
const apiHost = `${API_HOST}`

const httpsClient = axios.create({
  baseURL
})

httpsClient.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['X-RapidAPI-Key'] = apiKey
    config.headers['X-RapidAPI-Host'] = apiHost
    config.params['sport_id'] = 1
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default httpsClient
