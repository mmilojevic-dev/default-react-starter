import React from 'react'

import { NavLink } from '@/components'
import { ROUTES } from '@/config'

export const Navigation: React.FC = () => {
  const navigationItems = React.useMemo(
    () =>
      Object.keys(ROUTES.PROTECTED)
        .map((key) => ROUTES.PROTECTED[key as keyof typeof ROUTES.PROTECTED])
        .filter((route) => !route.NAV_ITEM),
    []
  )

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      {navigationItems.map((route) => (
        <NavLink key={route.PATH} route={route} />
      ))}
    </nav>
  )
}
