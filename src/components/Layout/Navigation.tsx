import React from 'react'

import { NavLink } from '@/components'
import { routesConfig } from '@/config'

export const Navigation: React.FC = () => {
  const navigationItems = React.useMemo(
    () =>
      Object.keys(routesConfig.protected)
        .map(
          (key) =>
            routesConfig.protected[key as keyof typeof routesConfig.protected]
        )
        .filter((route) => !route.navItem),
    []
  )

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      {navigationItems.map((route) => (
        <NavLink key={route.path} route={route} />
      ))}
    </nav>
  )
}
