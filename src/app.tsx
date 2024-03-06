import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@/contexts/theme-context'

import { Router } from './routing/router'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
