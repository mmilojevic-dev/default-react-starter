import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@/contexts/theme-context'

import { Router } from './routing/router'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
