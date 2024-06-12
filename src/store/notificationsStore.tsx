import { nanoid } from 'nanoid'
import { create } from 'zustand'

import { NotificationEnum, NotificationType } from '@/types'

interface NotificationState {
  currentNotifications: NotificationType[]
  addNotification: (
    type: NotificationEnum,
    title: string,
    message?: string
  ) => void
  removeNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  currentNotifications: [],
  addNotification: (type, title, message) =>
    set((state) => ({
      currentNotifications: [
        ...state.currentNotifications,
        { id: nanoid(), type, title, message }
      ]
    })),
  removeNotification: (id) =>
    set((state) => ({
      currentNotifications: state.currentNotifications.filter(
        (notification) => notification.id !== id
      )
    }))
}))
