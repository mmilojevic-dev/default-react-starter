import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config'
import { cn } from '@/utils'

export const Navigation: React.FC = () => {
  const { pathname } = useLocation()
  const routesKeys = Object.keys(ROUTES)
  return (
    <nav className="md:mt-5">
      <ul className="flex items-center justify-center gap-5 md:flex-col">
        {routesKeys.map((key: string) => {
          const route = ROUTES[key as keyof typeof ROUTES]
          return (
            !route.NAV_ITEM_HIDDEN && (
              <li key={route.PATH}>
                <Link
                  className={cn(
                    route.PATH === pathname && 'underline',
                    'md:text-2xl',
                    'tracking-widest'
                  )}
                  to={route.PATH}
                >
                  {route.LABEL}
                </Link>
              </li>
            )
          )
        })}
      </ul>
    </nav>
  )
}
