import axios, { InternalAxiosRequestConfig } from 'axios'
import { AxiosResponse } from 'axios'

import { appDefaultConfig } from '@/config'
import { handleError } from '@/utils'

export const axiosClient = axios.create({
  baseURL: appDefaultConfig.apiUrl,
  headers: {
    Accept: 'application/json'
  }
})

const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config
}

const responseSuccessHandler = (response: AxiosResponse): any => {
  return response.data
}

axiosClient.interceptors.request.use(requestInterceptor, handleError)

axiosClient.interceptors.response.use(responseSuccessHandler, handleError)
