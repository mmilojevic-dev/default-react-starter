import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { THEME } from '@/config'
import { ThemeEnum, ThemeType } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storage'

const THEME_KEY = THEME.LOCAL_STORAGE_KEY

interface ThemeState {
  activeTheme: ThemeType
}

const initialState: ThemeState = {
  activeTheme: getFromLocalStorage<ThemeType>(THEME_KEY, ThemeEnum.System)
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      const newTheme = action.payload
      setToLocalStorage(THEME_KEY, newTheme)
      state.activeTheme = newTheme
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
