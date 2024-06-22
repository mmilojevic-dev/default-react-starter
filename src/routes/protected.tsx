import React from 'react'

import { routesConfig } from '@/config'

const LayoutProvider = React.lazy(() => import('@/providers/layout'))
const About = React.lazy(() => import('@/features/misc/routes/About'))
const Posts = React.lazy(() => import('@/features/posts/routes/Posts'))

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
