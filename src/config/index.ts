import { HomeIcon, InfoIcon, Target } from 'lucide-react'

import { ThemeEnum } from '@/types'

export const APP_DEFAULT = {
  AUTHOR: 'Miloš Milojević',
  CURRENCY: '€',
  DESCRIPTION:
    'A template built to easily start with client-rendered React app development with Vite.',
  LABGUAGE: 'en',
  TITLE: 'Default React Template',
  VERSION: '1.0.0',
  CLIENT_URL: process.env.REACT_APP_CLIENT_URL as string,
  API_URL: process.env.REACT_APP_API_URL as string,
  GITHUB_REPO_URL: 'https://github.com/mmilojevic-dev/default-react-starter',
  LOGO: Target
}

export const ROUTES = {
  PUBLIC: {
    LANDING: {
      LABEL: '',
      PATH: '',
      NAV_ITEM: true,
      ICON: null
    }
  },
  PROTECTED: {
    APP: {
      LABEL: '',
      PATH: 'app',
      NAV_ITEM: true,
      ICON: null
    },
    HOME: {
      LABEL: 'Home',
      PATH: '',
      NAV_ITEM: false,
      ICON: HomeIcon
    },
    ABOUT: {
      LABEL: 'About',
      PATH: 'about',
      NAV_ITEM: false,
      ICON: InfoIcon
    }
  }
}

export const THEME = {
  TOGGLER_LABEL: 'Toggle theme',
  INITIAL: ThemeEnum.System,
  LOCAL_STORAGE_KEY: 'theme'
}

export const LANDING = {
  ACTION_BUTTON_LABEL: `Get Started`,
  PROJECT_REPO_LABEL: `Github Repo`
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
  GENERAL_NETWORK: 'Network Error',
  FALLBACK_TEXT: 'Ooops, something went wrong:',
  FALLBACK_BUTTON_LABEL: 'Refresh'
}
