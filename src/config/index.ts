import { ThemeEnum } from '@/models'

export const APP_DEFAULT = {
  AUTHOR: 'Miloš Milojević',
  CURRENCY: '€',
  DESCRIPTION:
    'A template built to easily start with client-rendered React app development with Vite.',
  LABGUAGE: 'en',
  TITLE: 'Default React Template',
  VERSION: '1.0.0'
}

export const ROUTES = {
  HOME: {
    LABEL: 'Home',
    PATH: '/',
    NAV_ITEM_HIDDEN: false
  },
  ABOUT: {
    LABEL: 'About',
    PATH: '/about',
    NAV_ITEM_HIDDEN: false
  }
}

export const THEME = {
  TOGGLER_LABEL: 'Toggle theme',
  INITIAL: ThemeEnum.System
}

export const HOME = {
  TITLE: `Welcome - this is ${APP_DEFAULT.TITLE}.`
}

export const ABOUT = {
  AUTHOR: APP_DEFAULT.AUTHOR,
  VERSION: APP_DEFAULT.VERSION,
  APP_NAME: APP_DEFAULT.TITLE,
  APP_DESCRIPTION: APP_DEFAULT.DESCRIPTION
}
