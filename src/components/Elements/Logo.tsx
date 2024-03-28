import { Target } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link className="flex items-center gap-2" to="/">
      <Target className="size-8 rounded-full" />
      <span className="text-sm font-semibold">Default React Template</span>
    </Link>
  )
}
