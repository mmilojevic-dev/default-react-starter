import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { NotificationType } from '@/types'

interface Notification {
  id: string
  type: NotificationType
  title: string
  message?: string
}

interface NotificationState {
  currentNotifications: Notification[]
}

const initialState: NotificationState = {
  currentNotifications: []
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: {
      reducer: (state, action: PayloadAction<Notification>) => {
        state.currentNotifications.push(action.payload)
      },
      prepare: (type: NotificationType, title: string, message?: string) => ({
        payload: {
          id: nanoid(),
          type,
          title,
          message
        }
      })
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.currentNotifications = state.currentNotifications.filter(
        (notification) => notification.id !== action.payload
      )
    }
  }
})

export const { addNotification, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer
