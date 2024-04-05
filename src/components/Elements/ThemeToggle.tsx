import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components'
import { THEME } from '@/config'
import { AppDispatch, setTheme } from '@/store'
import { ThemeEnum } from '@/types'

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Toggle theme</span>
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
          onClick={() => dispatch(setTheme(ThemeEnum.Light))}
        >
          {ThemeEnum.Light}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="capitalize"
          onClick={() => dispatch(setTheme(ThemeEnum.Dark))}
        >
          {ThemeEnum.Dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="capitalize"
          onClick={() => dispatch(setTheme(ThemeEnum.System))}
        >
          {ThemeEnum.System}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
