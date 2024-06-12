import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { NotificationEnum, NotificationType } from '@/types'
interface NotificationState {
  currentNotifications: NotificationType[]
}

const initialState: NotificationState = {
  currentNotifications: []
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: {
      reducer: (state, action: PayloadAction<NotificationType>) => {
        state.currentNotifications.push(action.payload)
      },
      prepare: (type: NotificationEnum, title: string, message?: string) => ({
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
