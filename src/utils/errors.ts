import { errorsConfig } from '@/config'
import { useNotificationStore } from '@/store/notificationsStore'
import { NotificationEnum } from '@/types'

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

export const handleError = (error: any) => {
  const errorMessage = getErrorMessage(error)
  const addNotification = useNotificationStore.getState().addNotification
  addNotification(
    NotificationEnum.Error,
    errorsConfig.defaultTitle,
    errorMessage
  )
}
