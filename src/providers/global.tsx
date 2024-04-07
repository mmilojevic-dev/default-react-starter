import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ErrorFallback, LoadingFallback, Notifications } from '@/components'
import { queryClient } from '@/lib/react-query'
import { store } from '@/store'

import { Theme } from './theme'

type GlobalProviderProps = {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
