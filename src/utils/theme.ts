import { ThemeEnum } from '@/types'

export const applyTheme = (theme: ThemeEnum) => {
  const root = window.document.documentElement
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeEnum.Dark
    : ThemeEnum.Light

  root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark)
  root.classList.add(theme === ThemeEnum.System ? systemTheme : theme)
}
