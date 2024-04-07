import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { Landing } = lazyImport(() => import('@/features/misc'), 'Landing')

export const publicRoutes = [
  {
    path: ROUTES.PUBLIC.LANDING.PATH,
    element: <Landing />
  }
]
