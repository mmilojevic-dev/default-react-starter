import { ExclamationTriangleIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { CheckCircleIcon, ShieldCloseIcon, XIcon } from 'lucide-react'

import { Button } from '@/components'

const icons = {
  info: <InfoCircledIcon className="size-6 text-primary" aria-hidden="true" />,
  success: (
    <CheckCircleIcon className="size-6 text-accent" aria-hidden="true" />
  ),
  warning: (
    <ExclamationTriangleIcon
      className="size-6 text-yellow-500"
      aria-hidden="true"
    />
  ),
  error: (
    <ShieldCloseIcon className="size-6 text-destructive" aria-hidden="true" />
  )
}

export type NotificationProps = {
  notification: {
    id: string
    type: keyof typeof icons
    title: string
    message?: string
  }
  onDismiss: (id: string) => void
}

export const Notification = ({
  notification: { id, type, title, message },
  onDismiss
}: NotificationProps) => {
  return (
    <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
      <div
        className="pointer-events-auto w-full max-w-sm animate-slideIn overflow-hidden rounded-lg
          bg-background shadow-lg ring-1"
      >
        <div className="p-4" role="alert" aria-label={title}>
          <div className="flex items-start">
            <div className="shrink-0">{icons[type]}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-foreground">{title}</p>
              <p className="mt-1 text-sm text-foreground/50">{message}</p>
            </div>
            <div className="ml-4 flex shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  onDismiss(id)
                }}
              >
                <span className="sr-only">Close</span>
                <XIcon className="size-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
