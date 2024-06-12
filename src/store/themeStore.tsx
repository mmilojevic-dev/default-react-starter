import { create } from 'zustand'

import { themeConfig } from '@/config'
import { ThemeEnum } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storage'

interface ThemeState {
  currentTheme: ThemeEnum
  setTheme: (theme: ThemeEnum) => void
}

const THEME_KEY = themeConfig.localStorageKey

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: getFromLocalStorage<ThemeEnum>(THEME_KEY, ThemeEnum.System),
  setTheme: (theme) => {
    setToLocalStorage(THEME_KEY, theme)
    set({ currentTheme: theme })
  }
}))
