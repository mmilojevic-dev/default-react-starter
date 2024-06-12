import React from 'react'
import { Outlet } from 'react-router-dom'

import { LoadingFallback, MainLayout } from '@/components'

export const LayoutProvider = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </React.Suspense>
    </MainLayout>
  )
}
