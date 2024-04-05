import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { AppProvider } = lazyImport(() => import('@/providers'), 'AppProvider')
const { Home } = lazyImport(() => import('@/features'), 'Home')
const { About } = lazyImport(() => import('@/features'), 'About')

export const protectedRoutes = [
  {
    path: ROUTES.PROTECTED.APP.PATH,
    element: <AppProvider />,
    children: [
      { path: ROUTES.PROTECTED.HOME.PATH, element: <Home /> },
      { path: ROUTES.PROTECTED.ABOUT.PATH, element: <About /> }
    ]
  }
]
