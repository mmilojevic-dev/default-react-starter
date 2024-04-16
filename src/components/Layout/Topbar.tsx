import { MenuIcon } from 'lucide-react'

import { Button, ThemeToggle } from '@/components'

type TopbarProps = {
  setMobileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Topbar = ({ setMobileDrawerOpen }: TopbarProps) => {
  return (
    <div className="relative z-10 flex h-16 shrink-0 bg-popover/15">
      <div className="flex flex-1 justify-between px-4">
        <div className="mr-4 flex items-center md:mr-6">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="size-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
