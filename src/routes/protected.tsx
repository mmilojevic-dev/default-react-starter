import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { AppProvider } = lazyImport(() => import('@/providers'), 'AppProvider')
const { About } = lazyImport(() => import('@/features/misc'), 'About')
const { Posts } = lazyImport(() => import('@/features/posts'), 'Posts')

export const protectedRoutes = [
  {
    path: ROUTES.PROTECTED.APP.PATH,
    element: <AppProvider />,
    children: [
      { path: ROUTES.PROTECTED.ABOUT.PATH, element: <About /> },
      { path: ROUTES.PROTECTED.POSTS.PATH, element: <Posts /> }
    ]
  }
]
