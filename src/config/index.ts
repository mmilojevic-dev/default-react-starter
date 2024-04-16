import { InfoIcon, List, Target } from 'lucide-react'

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
    POSTS: {
      LABEL: 'Posts',
      PATH: '',
      NAV_ITEM: false,
      ICON: List
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

export const POSTS = {
  TITLE: 'Posts',
  API_PATH: '/posts',
  QUERY_KEY: 'posts'
}

export const CREATE_POST = {
  TRIGGER_BUTTON_LABEL: 'Create Post',
  FORM_DRAWER: {
    TITLE: 'Create Post',
    POST_TITLE_PLACEHOLDER: 'Title',
    POST_BODY_PLACEHOLDER: 'Body',
    CONFIRM_BUTTON_LABEL: 'Submit'
  },
  STATUS: {
    ERROR: {
      TITLE: 'Post Creation Error'
    },
    SUCCESS: {
      TITLE: 'Post Created',
      MESSAGE: (postId: number) => `Post with id ${postId} has been created.`
    }
  }
}

export const DELETE_POST = {
  TRIGGER_BUTTON_LABEL: 'Delete Post',
  CONFIRMATION_MODAL: {
    TITLE: 'Delete Post',
    BODY: 'Are you sure you want to delete this post?',
    CONFIRM_BUTTON_LABEL: 'Delete Post'
  },
  STATUS: {
    ERROR: {
      TITLE: 'Post Deletion Error'
    },
    SUCCESS: {
      TITLE: 'Post Deleted',
      MESSAGE: (postId: number) => `Post with id ${postId} has been deleted.`
    }
  }
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
