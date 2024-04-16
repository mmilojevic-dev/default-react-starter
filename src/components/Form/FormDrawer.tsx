import React from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
} from '@/components'
import { useOpenClose } from '@/hooks/useOpenClose'

interface FormDrawerProps extends React.PropsWithChildren {
  isDone: boolean
  triggerButton: React.ReactElement
  submitButton: React.ReactElement
  title: string
}

export const FormDrawer = ({
  title,
  children,
  isDone,
  triggerButton,
  submitButton
}: FormDrawerProps) => {
  const { isOpen, close, toggle } = useOpenClose()

  React.useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  return (
    <Drawer open={isOpen} onOpenChange={toggle}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="flex flex-col gap-y-4 p-4" side="right">
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter>
          <Button variant="outline" size="sm" onClick={close}>
            Cancel
          </Button>
          {submitButton}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
