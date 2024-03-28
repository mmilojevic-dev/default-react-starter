import Axios, { InternalAxiosRequestConfig } from 'axios'

import { APP_DEFAULT, ROUTES } from '@/config'

export const axiosInstance = Axios.create({
  baseURL: APP_DEFAULT.API_URL
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Accept = 'application/json'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  // TODO: here error handling should be improved to utilize some kind of notification sustem with small 'toast' components with error user-friendly messages instead of navigating
  (error) => {
    console.log(error)
    if (error?.response.status === 500) {
      window.location.assign(
        `${APP_DEFAULT.CLIENT_URL}/${ROUTES.INTERNAL_SERVER.PATH}`
      )
    }
    if (error?.response.status === 404) {
      window.location.assign(
        `${APP_DEFAULT.CLIENT_URL}/${ROUTES.NOT_FOUND.PATH}`
      )
    }
    return Promise.reject(error)
  }
)
