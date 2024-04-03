import Axios, { InternalAxiosRequestConfig } from 'axios'

import { APP_DEFAULT, ERRORS } from '@/config'
import { store } from '@/store'
import { addNotification } from '@/store/notificationsSlice'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils/errors'

export const axiosInstance = Axios.create({
  baseURL: APP_DEFAULT.API_URL
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Accept = 'application/json'
    return config
  },
  (error) => {
    store.dispatch(
      addNotification(
        NotificationEnum.Error,
        ERRORS.GENERAL_NETWORK_ERROR,
        getErrorMessage(error)
      )
    )
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)

    return Promise.reject(error)
  }
)
