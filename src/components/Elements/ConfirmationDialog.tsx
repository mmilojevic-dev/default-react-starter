import { ExclamationTriangleIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components'
import { useOpenClose } from '@/hooks/useOpenClose'

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement
  confirmButton: React.ReactElement
  title: string
  body?: string
  cancelButtonText?: string
  icon?: 'danger' | 'info'
  isDone?: boolean
}

export const ConfirmationDialog = ({
  triggerButton,
  confirmButton,
  title,
  body = '',
  cancelButtonText = 'Cancel',
  icon = 'danger',
  isDone = false
}: ConfirmationDialogProps) => {
  const { isOpen, close, toggle } = useOpenClose()

  React.useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-y-4">
          <div className="flex items-center gap-x-2">
            {icon === 'danger' && (
              <ExclamationTriangleIcon className="size-6 text-destructive" />
            )}
            {icon === 'info' && (
              <InfoCircledIcon className="size-6 text-accent" />
            )}
            <DialogTitle>{title}</DialogTitle>
          </div>
        </DialogHeader>
        <DialogDescription className="px-8">{body}</DialogDescription>
        <DialogFooter>
          <div className="mt-4 flex space-x-2">
            <Button variant="outline" onClick={close}>
              {cancelButtonText}
            </Button>
            {confirmButton}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
