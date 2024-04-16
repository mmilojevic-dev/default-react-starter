import { useDispatch, useSelector } from 'react-redux'

import { Notification } from '@/components'
import { AppDispatch, removeNotification, RootState } from '@/store'

export const Notifications = () => {
  const notifications = useSelector(
    (state: RootState) => state.notifications.currentNotifications
  )
  const dispatch = useDispatch<AppDispatch>()

  const dismissNotification = (id: string) => {
    dispatch(removeNotification(id))
  }

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-100 flex flex-col items-end space-y-4 px-4
        py-6 sm:items-start sm:p-6"
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  )
}
