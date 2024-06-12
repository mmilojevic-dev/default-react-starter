import React from 'react'
import { useSelector } from 'react-redux'

import { selectTheme } from '@/store'
import { ThemeEnum } from '@/types'

export const Theme = ({ children }: React.PropsWithChildren) => {
  const theme = useSelector(selectTheme)

  React.useEffect(() => {
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
