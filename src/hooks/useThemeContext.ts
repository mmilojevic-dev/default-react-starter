import React from 'react'

import { THEME } from '@/config'
import { ThemeContext } from '@/contexts/theme'
import { ThemeContextInterface, ThemeType } from '@/types'
import { applyTheme } from '@/utils/theme'

import { useLocalStorageState } from './useLocalStorage'

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
    applyTheme(theme)
  }, [theme])

  return { theme, setTheme }
}
