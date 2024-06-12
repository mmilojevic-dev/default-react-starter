import { errorsConfig } from '@/config'
import { addNotification, store } from '@/store'
import { NotificationEnum } from '@/types'

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

export const handleError = (error: any) => {
  store.dispatch(
    addNotification(
      NotificationEnum.Error,
      errorsConfig.defaultTitle,
      getErrorMessage(error)
    )
  )
}
