import '@/styles/globals.css'

import React from 'react'

import { AppRoutes } from '@/routes'

const AppProvider = React.lazy(() => import('@/providers/app'))

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
