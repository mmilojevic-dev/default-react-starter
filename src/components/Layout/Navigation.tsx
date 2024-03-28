import React from 'react'

import { NavLink } from '@/components'
import { ROUTES } from '@/config'

export const Navigation: React.FC = () => {
  const navigationItems = React.useMemo(
    () =>
      Object.keys(ROUTES)
        .map((key) => ROUTES[key as keyof typeof ROUTES])
        .filter((route) => !route.navItemHidden),
    []
  )

  return (
    <>
      {navigationItems.map((route) => (
        <NavLink key={route.path} route={route} />
      ))}
    </>
  )
}
