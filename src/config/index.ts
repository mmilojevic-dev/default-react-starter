import { InfoIcon, List, Target } from 'lucide-react'

import { ThemeEnum } from '@/types'

export const appDefaultConfig = {
  author: 'Miloš Milojević',
  currency: '€',
  description:
    'A template built to easily start with client-rendered React app development with Vite.',
  language: 'en',
  title: 'Default React Template',
  version: '1.0.0',
  clientUrl: process.env.REACT_APP_CLIENT_URL as string,
  apiUrl: process.env.REACT_APP_API_URL as string,
  githubRepoUrl: 'https://github.com/mmilojevic-dev/default-react-starter',
  logo: Target
}

export const routesConfig = {
  public: {
    landing: {
      label: '',
      path: '',
      navItem: true,
      icon: null
    }
  },
  protected: {
    app: {
      label: '',
      path: 'app',
      navItem: true,
      icon: null
    },
    posts: {
      label: 'Posts',
      path: '',
      navItem: false,
      icon: List
    },
    about: {
      label: 'About',
      path: 'about',
      navItem: false,
      icon: InfoIcon
    }
  }
}

export const themeConfig = {
  togglerLabel: 'Toggle theme',
  initial: ThemeEnum.System,
  localStorageKey: 'theme'
}

export const landingConfig = {
  actionButtonLabel: `Get Started`,
  projectRepoLabel: `Github Repo`,
  projectRepoLink: appDefaultConfig.githubRepoUrl
}

export const postsConfig = {
  title: 'Posts',
  apipath: '/posts',
  queryKey: 'posts'
}

export const createPostConfig = {
  triggerButtonLabel: 'Create Post',
  formDrawer: {
    title: 'Create Post',
    postTitlePlaceholder: 'Title',
    postBodyPlaceholder: 'Body',
    confirmButtonLabel: 'Submit'
  },
  status: {
    error: {
      title: 'Post Creation Error'
    },
    success: {
      title: 'Post Created',
      message: (postId: number) => `Post with id ${postId} has been created.`
    }
  }
}

export const deletePostConfig = {
  triggerButtonLabel: 'Delete Post',
  confirmationModal: {
    title: 'Delete Post',
    body: 'Are you sure you want to delete this post?',
    confirmButtonLabel: 'Delete Post'
  },
  status: {
    error: {
      title: 'Post Deletion Error'
    },
    success: {
      title: 'Post Deleted',
      message: (postId: number) => `Post with id ${postId} has been deleted.`
    }
  }
}

export const aboutConfig = {
  title: 'About',
  content: {
    author: appDefaultConfig.author,
    version: appDefaultConfig.version,
    appName: appDefaultConfig.title,
    appDescription: appDefaultConfig.description
  }
}

export const errorsConfig = {
  defaultTitle: 'Network Error',
  fallbackText: 'Ooops, something went wrong:',
  fallbackButtonLabel: 'Refresh'
}
