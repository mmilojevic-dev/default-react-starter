import React from 'react'

import { useThemeStore } from '@/store/themeStore'
import { ThemeEnum } from '@/types'

export const Theme = ({ children }: React.PropsWithChildren) => {
  const { currentTheme } = useThemeStore()

  React.useEffect(() => {
    const root = window.document.documentElement
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? ThemeEnum.Dark
      : ThemeEnum.Light

    root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark)
    root.classList.add(
      currentTheme === ThemeEnum.System ? systemTheme : currentTheme
    )
  }, [currentTheme])

  return <>{children}</>
}
