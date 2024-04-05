import React from 'react'
import { Outlet } from 'react-router-dom'

import { MainLayout, Spinner } from '@/components'

export const AppProvider = () => {
  return (
    <MainLayout>
      <React.Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </React.Suspense>
    </MainLayout>
  )
}
