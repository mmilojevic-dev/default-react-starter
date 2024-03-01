import { Outlet } from 'react-router'

import { Navigation } from '../components/compound/navigation'
import { SideNavigationBar } from '../components/compound/side-navigation-bar'
import { ThemeToggle } from '../components/compound/theme-toggle'

export const Layout: React.FC = () => {
  return (
    <div className="h-screen gap-4 p-4 md:grid md:grid-cols-4 md:grid-rows-5">
      <SideNavigationBar>
        <ThemeToggle />
        <Navigation />
      </SideNavigationBar>
      <main
        className="h-full overflow-y-auto p-4 pt-12 md:col-start-2 md:col-end-5 md:row-start-1
          md:row-end-8 md:h-auto"
      >
        <Outlet />
      </main>
    </div>
  )
}
