import { withSuspense } from '@/hoc/withSuspense'
import { useNotificationStore } from '@/store/notificationsStore'

import { Notification } from './Notification'

const Notifications = () => {
  const { currentNotifications, removeNotification } = useNotificationStore()

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-100 flex flex-col items-end space-y-4 px-4
        py-6 sm:items-start sm:p-6"
    >
      {currentNotifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={removeNotification}
        />
      ))}
    </div>
  )
}

export default withSuspense(Notifications)
