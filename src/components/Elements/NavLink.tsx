import { NavLink as RouterNavLink, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config'
import { cn } from '@/utils'

type ProtectedRouteKey = keyof typeof ROUTES.PROTECTED

type NavLinkProps = {
  route: (typeof ROUTES.PROTECTED)[ProtectedRouteKey]
}

export const NavLink = ({ route }: NavLinkProps) => {
  const { pathname } = useLocation()

  const isActive = route.PATH === pathname
  const linkClasses = cn(
    isActive ? 'bg-background/50 text-foreground' : 'text-muted-foreground/75',
    `group flex uppercase tracking-widest items-center rounded-md p-2 font-medium hover:text-foreground`
  )
  const iconClasses = cn(
    isActive ? 'text-foreground' : 'text-muted-foreground/75',
    'mr-4 size-6 shrink-0 group-hover:text-foreground'
  )

  return (
    <RouterNavLink className={linkClasses} to={route.PATH}>
      {route.ICON && <route.ICON className={iconClasses} aria-hidden="true" />}
      {route.LABEL}
    </RouterNavLink>
  )
}
