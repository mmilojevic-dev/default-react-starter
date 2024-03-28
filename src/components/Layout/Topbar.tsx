import { ThemeToggle } from '@/components'

export const Topbar = () => {
  return (
    <div className="relative z-10 flex h-16 shrink-0 bg-card/15">
      <div className="flex flex-1 justify-end px-4">
        <div className="ml-4 flex items-center md:ml-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
