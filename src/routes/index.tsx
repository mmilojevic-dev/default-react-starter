import { Navigate, useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
  // const auth = { user: true }

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to="." />
    }
  ]

  // const routes = auth.user ? protectedRoutes : publicRoutes

  const routes = useRoutes([
    ...protectedRoutes,
    ...publicRoutes,
    ...commonRoutes
  ])

  return <>{routes}</>
}
