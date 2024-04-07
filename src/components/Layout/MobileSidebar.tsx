import { Logo, Navigation, Sheet, SheetContent } from '@/components'

type MobileSidebarProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileSidebar = ({
  sidebarOpen,
  setSidebarOpen
}: MobileSidebarProps) => {
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent className="w-60">
        <div className="h-full bg-card">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col">
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
      </SheetContent>
    </Sheet>
  )
}
