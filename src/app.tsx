import '@/styles/globals.css'

import { AppProvider } from '@/providers'
import { AppRoutes } from '@/routes'

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
