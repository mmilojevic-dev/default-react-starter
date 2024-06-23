import { Cross2Icon } from '@radix-ui/react-icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components/Elements/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
} from '@/components/Elements/Dialog'

describe('Dialog', () => {
  it('renders and opens the dialog when trigger is clicked', () => {
    // Render the Dialog component with a trigger button
    const { asFragment } = render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent aria-describedby="dialog-description">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription id="dialog-description">
              This is a description.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    // Verify that the trigger button is rendered
    const triggerButton = screen.getByText('Open Dialog')
    expect(triggerButton).toBeInTheDocument()

    // Click the trigger button to open the dialog
    fireEvent.click(triggerButton)

    // Verify that the dialog content is rendered
    const dialogTitle = screen.getByText('Dialog Title')
    const dialogDescription = screen.getByText('This is a description.')
    expect(dialogTitle).toBeInTheDocument()
    expect(dialogDescription).toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('closes the dialog when close button is clicked', () => {
    // Render the Dialog component with a trigger and close button
    const { asFragment } = render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <Button>
              <Cross2Icon className="size-4" aria-label="close" />
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Click the close button to close the dialog
    const closeButton = screen.getByLabelText('close')
    fireEvent.click(closeButton)

    // Verify that the dialog content is no longer rendered
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with custom Tailwind classes', () => {
    // Render the Dialog component with custom Tailwind classes
    const { asFragment } = render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent
          className="bg-gray-700 text-white"
          aria-describedby="dialog-description"
        >
          <DialogOverlay className="opacity-75" />
          <DialogHeader className="text-center">
            <DialogTitle className="font-bold">Dialog Title</DialogTitle>
            <DialogDescription id="dialog-description" className="text-sm">
              This is a description.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-end">
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Verify that the custom Tailwind classes are applied
    const dialogContent = screen
      .getByText('Dialog Title')
      .closest('[role="dialog"]')
    expect(dialogContent).toHaveClass('bg-gray-700')
    expect(dialogContent).toHaveClass('text-white')
    expect(screen.getByText('This is a description.')).toHaveClass('text-sm')
    expect(screen.getByText('Dialog Title')).toHaveClass('font-bold')

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
