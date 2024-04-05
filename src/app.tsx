import 'styles/globals.css'

import { GlobalProvider } from '@/providers'
import { AppRoutes } from '@/routes'

export const App: React.FC = () => {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  )
}
