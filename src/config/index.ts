import { HomeIcon, InfoIcon } from 'lucide-react'

import { ThemeEnum } from '@/types'

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
    label: 'Home',
    path: '/',
    navItemHidden: false,
    icon: HomeIcon
  },
  ABOUT: {
    label: 'About',
    path: '/about',
    navItemHidden: false,
    icon: InfoIcon
  },
  NOT_FOUND: {
    label: '',
    path: '/404',
    navItemHidden: true,
    icon: null
  },
  INTERNAL_SERVER: {
    label: '',
    path: '/500',
    navItemHidden: true,
    icon: null
  }
}

export const THEME = {
  TOGGLER_LABEL: 'Toggle theme',
  INITIAL: ThemeEnum.System,
  LOCAL_STORAGE_KEY: 'theme',
  OUT_OF_PROVIDER_USAGE_ERROR:
    'useThemeContext must be used within a ThemeProvider'
}

export const HOME = {
  TITLE: `Welcome - this is ${APP_DEFAULT.TITLE}.`
}

export const ABOUT = {
  TITLE: 'About',
  CONTENT: {
    AUTHOR: APP_DEFAULT.AUTHOR,
    VERSION: APP_DEFAULT.VERSION,
    APP_NAME: APP_DEFAULT.TITLE,
    APP_DESCRIPTION: APP_DEFAULT.DESCRIPTION
  }
}

export const ERRORS = {
  NOT_FOUND_MESSAGE: '404 - Not Found.',
  INTERNAL_SERVER_MESSAGE: '500 - Internal Server Error.'
}
