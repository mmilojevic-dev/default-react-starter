import { ThemeEnum } from '@/models'

export const APP_DEFAULT = {
  CURRENCY: '€',
  LABGUAGE: 'en'
}

export const THEME = {
  TOGGLER_LABEL: 'Toggle theme',
  INITIAL: ThemeEnum.System
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
export const HOME = {
  TITLE: 'Welcome - this is Default React Template.'
}

export const ABOUT = {
  AUTHOR: 'Miloš Milojević',
  VERSION: '0.1.0',
  APP_NAME: 'Default React Template',
  APP_DESCRIPTION:
    'A template built to easily start with client-rendered React app development with Vite.'
}
