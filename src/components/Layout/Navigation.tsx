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
    <>
      {navigationItems.map((route) => (
        <NavLink key={route.PATH} route={route} />
      ))}
    </>
  )
}
