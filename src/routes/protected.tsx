import { routesConfig } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { About } = lazyImport(() => import('@/features/misc'), 'About')
const { Posts } = lazyImport(() => import('@/features/posts'), 'Posts')

export const protectedRoutes = [
  {
    path: routesConfig.protected.app.path,
    element: <LayoutProvider />,
    children: [
      { path: routesConfig.protected.about.path, element: <About /> },
      { path: routesConfig.protected.posts.path, element: <Posts /> }
    ]
  }
]
