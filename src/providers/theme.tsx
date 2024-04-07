import React, { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import { ThemeEnum } from '@/types'

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.activeTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? ThemeEnum.Dark
      : ThemeEnum.Light

    root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark)
    root.classList.add(theme === ThemeEnum.System ? systemTheme : theme)
  }, [theme])

  return <>{children}</>
}
