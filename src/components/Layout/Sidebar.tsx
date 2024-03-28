import { Logo, Navigation } from '@/components'

export const Sidebar = () => {
  return (
    <div className="hidden bg-card md:flex md:shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex h-0 flex-1 flex-col">
          <div className="flex h-16 shrink-0 items-center bg-background/50 px-4">
            <Logo />
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
