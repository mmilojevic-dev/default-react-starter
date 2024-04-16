import * as DrawerRadix from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Button } from '@/components'
import { cn } from '@/utils'

const Drawer = DrawerRadix.Root

const DrawerTrigger = DrawerRadix.Trigger

const DrawerClose = DrawerRadix.Close

const DrawerPortal = DrawerRadix.Portal

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerRadix.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerRadix.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerRadix.Overlay
    className={cn(
      `fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:fade-in-0`,
      className
    )}
    {...props}
    ref={ref}
  />
))
DrawerOverlay.displayName = DrawerRadix.Overlay.displayName

const DrawerVariants = cva(
  'fixed z-50 min-h-0 w-screen gap-4 overflow-y-auto bg-popover shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
      },
      size: {
        xs: 'max-w-60',
        sm: 'max-w-xs',
        md: 'max-w-md',
        lg: 'max-w-4xl',
        full: 'max-w-full'
      }
    },
    defaultVariants: {
      side: 'left',
      size: 'xs'
    }
  }
)

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerRadix.Content>,
    VariantProps<typeof DrawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerRadix.Content>,
  DrawerContentProps
>(({ side = 'left', className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerRadix.Content
      ref={ref}
      className={cn(DrawerVariants({ side }), className)}
      {...props}
    >
      {children}
      <DrawerRadix.Close className="absolute right-3 top-3 disabled:pointer-events-none">
        <Button variant="outline">
          <Cross2Icon className="size-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DrawerRadix.Close>
    </DrawerRadix.Content>
  </DrawerPortal>
))
DrawerContent.displayName = DrawerRadix.Content.displayName

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2', className)} {...props} />
)
DrawerBody.displayName = 'DrawerBody'

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerRadix.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerRadix.Title>
>(({ className, ...props }, ref) => (
  <DrawerRadix.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
DrawerTitle.displayName = DrawerRadix.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerRadix.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerRadix.Description>
>(({ className, ...props }, ref) => (
  <DrawerRadix.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerRadix.Description.displayName

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
}
