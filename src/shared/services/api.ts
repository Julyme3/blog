import axios, { AxiosError } from 'axios'

console.log(import.meta.env.VITE_APP_API_URL)
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const _error = error as AxiosError<string>

    console.log(_error.message)
    return {
      success: false,
      status: _error.response?.status,
      content: null,
    }
  },
)

export default instance
