import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/Elements/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/Elements/DropdownMenu'
import { THEME } from '@/config'
import { useThemeContext } from '@/hooks/use-theme-context'
import { ThemeEnum } from '@/types'

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useThemeContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon
            className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0
              dark:scale-100"
          />
          <span className="sr-only">{THEME.TOGGLER_LABEL}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="capitalize"
          onClick={() => setTheme(ThemeEnum.Light)}
        >
          {ThemeEnum.Light}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="capitalize"
          onClick={() => setTheme(ThemeEnum.Dark)}
        >
          {ThemeEnum.Dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="capitalize"
          onClick={() => setTheme(ThemeEnum.System)}
        >
          {ThemeEnum.System}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
