import { Logo, Navigation } from '@/components'
import { cn } from '@/utils'

type SidebarProps = {
  className: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn('h-full bg-popover', className)}>
      <div className="flex w-52 flex-col">
        <div className="flex h-0 flex-1 flex-col">
          <div className="flex h-16 shrink-0 items-center bg-background/50 px-4">
            <Logo withTitle />
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              <Navigation />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
