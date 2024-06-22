import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import { Theme } from '@/components'
import { withSuspense } from '@/hoc'
import { queryClient } from '@/lib'

const ErrorFallback = React.lazy(
  () => import('@/components/Layout/ErrorFallback')
)
const Notifications = React.lazy(
  () => import('@/components/Notifications/Notifications')
)

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Theme>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <BrowserRouter>{children}</BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </Theme>
  )
}

export default withSuspense(AppProvider, true)
