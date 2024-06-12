import { routesConfig } from '@/config'
import { lazyImport } from '@/utils'

const { Landing } = lazyImport(() => import('@/features/misc'), 'Landing')

export const publicRoutes = [
  {
    path: routesConfig.public.landing.path,
    element: <Landing />
  }
]
