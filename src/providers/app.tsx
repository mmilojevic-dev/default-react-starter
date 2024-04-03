import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ErrorFallback } from '@/components'
import { Notifications } from '@/components'
import { store } from '@/store'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Notifications />
        <BrowserRouter>{children}</BrowserRouter>
      </ErrorBoundary>
    </Provider>
  )
}
