import React from 'react'

import { THEME } from '@/config'
import { useLocalStorageState } from '@/hooks/use-local-storage'
import { ThemeType } from '@/models'

interface ThemeContextInterface {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const initialState: ThemeContextInterface = {
  theme: THEME.INITIAL,
  setTheme: () => null
}

interface ThemeProviderPropsInterface {
  children: React.ReactNode
  defaultTheme?: ThemeType
  storageKey?: string
}

const ThemeContext = React.createContext<ThemeContextInterface>(initialState)

export const ThemeProvider: React.FC<ThemeProviderPropsInterface> = ({
  children,
  defaultTheme = THEME.INITIAL,
  storageKey = 'theme'
}) => {
  const [theme, setTheme] = useLocalStorageState<ThemeType>(
    storageKey,
    defaultTheme
  )

  React.useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

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

export const useThemeContext = (): ThemeContextInterface => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
