import React from 'react'

import { THEME } from '@/config'
import { ThemeContext } from '@/contexts/theme-context'
import { ThemeContextInterface, ThemeEnum, ThemeType } from '@/types'

import { useLocalStorageState } from './use-local-storage'

export const useThemeContext = (
  storageKey = THEME.LOCAL_STORAGE_KEY,
  defaultTheme = THEME.INITIAL
): ThemeContextInterface => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error(THEME.OUT_OF_PROVIDER_USAGE_ERROR)
  }

  const [theme, setTheme] = useLocalStorageState<ThemeType>(
    storageKey,
    defaultTheme
  )

  React.useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark)

    if (theme === ThemeEnum.System) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? ThemeEnum.Dark
        : ThemeEnum.Light

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return { theme, setTheme }
}
