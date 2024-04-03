import { ThemeEnum, ThemeType } from '@/types'

export const applyTheme = (theme: ThemeType) => {
  const root = window.document.documentElement
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeEnum.Dark
    : ThemeEnum.Light

  root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark)
  root.classList.add(theme === ThemeEnum.System ? systemTheme : theme)
}
