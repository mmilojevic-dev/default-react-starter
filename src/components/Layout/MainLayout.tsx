import React from 'react'

import { MobileSidebar, Sidebar, Topbar } from '@/components'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <div className="flex h-screen overflow-hidden">
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="hidden md:flex">
        <Sidebar className="hidden md:flex md:shrink-0" />
      </div>
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  )
}
