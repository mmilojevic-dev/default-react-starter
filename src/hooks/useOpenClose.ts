import * as React from 'react'

export const useOpenClose = (initial = false) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(initial)

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])
  const toggle = React.useCallback(() => setIsOpen((state) => !state), [])

  return { isOpen, open, close, toggle }
}
