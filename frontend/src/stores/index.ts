import axios from 'axios'
export * from './account'
export * from './food'
export * from './kitchen'

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string
axios.defaults.withCredentials = true
