export enum ThemeEnum {
  Dark = 'dark',
  Light = 'light',
  System = 'system'
}
export type ThemeType = ThemeEnum.Dark | ThemeEnum.Light | ThemeEnum.System

export interface ThemeContextInterface {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export type Route = {
  label: string
  path: string
  navItemHidden: boolean
  icon: ((props: React.SVGProps<SVGSVGElement>) => React.ReactNode) | null
}
