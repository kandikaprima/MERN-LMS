import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const apiInstance = axios.create({
  baseURL,
  timeout: 3000
})

export default apiInstance