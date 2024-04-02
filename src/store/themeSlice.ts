import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { THEME } from '@/config'
import { ThemeEnum } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage'

const THEME_KEY = THEME.LOCAL_STORAGE_KEY

interface ThemeState {
  activeTheme: ThemeEnum
}

const initialState: ThemeState = {
  activeTheme: getFromLocalStorage<ThemeEnum>(THEME_KEY, ThemeEnum.System)
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      const newTheme = action.payload
      setToLocalStorage(THEME_KEY, newTheme)
      state.activeTheme = newTheme
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
