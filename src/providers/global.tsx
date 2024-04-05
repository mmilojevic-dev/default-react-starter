import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import {
  ErrorFallback,
  Notifications,
  SuspenseFallback,
  Theme
} from '@/components'
import { store } from '@/store'

type GlobalProviderProps = {
  children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <Provider store={store}>
      <Theme>
        <React.Suspense fallback={<SuspenseFallback />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Notifications />
            <BrowserRouter>{children}</BrowserRouter>
          </ErrorBoundary>
        </React.Suspense>
      </Theme>
    </Provider>
  )
}
