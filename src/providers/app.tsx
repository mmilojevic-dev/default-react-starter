import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import {
  ErrorFallback,
  LoadingFallback,
  Notifications,
  Theme
} from '@/components'
import { queryClient } from '@/lib'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Theme>
      <React.Suspense fallback={<LoadingFallback fullscreen />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <Notifications />
            <BrowserRouter>{children}</BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ErrorBoundary>
      </React.Suspense>
    </Theme>
  )
}
