import { NavLink, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config'
import { cn } from '@/utils'

export const Navigation: React.FC = () => {
  const { pathname } = useLocation()
  const routesKeys = Object.keys(ROUTES)
  return (
    <>
      {routesKeys.map((key: string) => {
        const route = ROUTES[key as keyof typeof ROUTES]
        return (
          !route.NAV_ITEM_HIDDEN && (
            <NavLink
              className={cn(
                route.PATH === pathname
                  ? 'bg-background/50 text-foreground'
                  : 'text-muted-foreground/50',
                `flex uppercase tracking-widest items-center rounded-md p-2 font-medium
                  hover:text-foreground`
              )}
              key={route.PATH}
              to={route.PATH}
            >
              {route.LABEL}
            </NavLink>
          )
        )
      })}
    </>
  )
}
