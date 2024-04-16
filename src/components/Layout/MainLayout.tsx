import React from 'react'

import { MobileDrawer, Sidebar, Topbar } from '@/components'
import { useOpenClose } from '@/hooks/useOpenClose'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen, toggle } = useOpenClose()

  return (
    <div className="flex h-screen overflow-hidden">
      <MobileDrawer isOpen={isOpen} setIsOpen={toggle} />
      <div className="hidden md:flex">
        <Sidebar className="hidden md:flex md:shrink-0" />
      </div>
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <Topbar setMobileDrawerOpen={toggle} />
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  )
}
