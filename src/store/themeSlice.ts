import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { themeConfig } from '@/config'
import { ThemeEnum } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storage'

import { RootState } from './store'

const THEME_KEY = themeConfig.localStorageKey

interface ThemeState {
  currentTheme: ThemeEnum
}

const initialState: ThemeState = {
  currentTheme: getFromLocalStorage<ThemeEnum>(THEME_KEY, ThemeEnum.System)
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      const newTheme = action.payload
      setToLocalStorage(THEME_KEY, newTheme)
      state.currentTheme = newTheme
    }
  }
})

export const { setTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.currentTheme
export default themeSlice.reducer
