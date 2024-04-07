import { Target } from 'lucide-react'
import { Link } from 'react-router-dom'

import { APP_DEFAULT } from '@/config'
import { cn } from '@/utils'

interface LogoProps {
  withTitle?: boolean
  size?: number
}

export const Logo = ({ withTitle = false, size = 8 }: LogoProps) => {
  const sizeClass = `size-${size}`
  return (
    <Link className="flex items-center gap-2" to=".">
      <Target className={cn(sizeClass, 'rounded-full', 'text-primary')} />
      {withTitle && (
        <span className="text-xs font-semibold">{APP_DEFAULT.TITLE}</span>
      )}
    </Link>
  )
}
