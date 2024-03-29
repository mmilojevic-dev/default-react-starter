import React from 'react'

import { THEME } from '@/config'
import { useThemeContext } from '@/hooks/useThemeContext'
import { ThemeContextInterface, ThemeType } from '@/types'

const initialState: ThemeContextInterface = {
  theme: THEME.INITIAL,
  setTheme: () => null
}

interface ThemeProviderPropsInterface {
  children: React.ReactNode
  defaultTheme?: ThemeType
  storageKey?: string
}

export const ThemeContext =
  React.createContext<ThemeContextInterface>(initialState)

export const ThemeProvider: React.FC<ThemeProviderPropsInterface> = ({
  children,
  storageKey = THEME.LOCAL_STORAGE_KEY,
  defaultTheme = THEME.INITIAL
}) => {
  const { theme, setTheme } = useThemeContext(storageKey, defaultTheme)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
