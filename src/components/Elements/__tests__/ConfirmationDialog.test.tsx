import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components/Elements/Button'
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog'

describe('ConfirmationDialog', () => {
  it('renders the trigger button and opens the dialog on click', () => {
    // Render the ConfirmationDialog with trigger and confirm buttons
    const { asFragment } = render(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Are you sure?"
        body="This action is irreversible."
      />
    )

    // Verify that the trigger button is rendered
    const triggerButton = screen.getByText('Open Dialog')
    expect(triggerButton).toBeInTheDocument()

    // Click the trigger button to open the dialog
    fireEvent.click(triggerButton)

    // Verify that the dialog is opened and contains the correct elements
    const dialogTitle = screen.getByText('Are you sure?')
    const dialogBody = screen.getByText('This action is irreversible.')
    const confirmButton = screen.getByText('Confirm')
    const cancelButton = screen.getByText('Cancel')

    expect(dialogTitle).toBeInTheDocument()
    expect(dialogBody).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls close function on cancel button click', () => {
    const { asFragment } = render(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Are you sure?"
      />
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Click the cancel button to close the dialog
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)

    // Verify that the dialog is closed
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with danger icon', () => {
    const { asFragment } = render(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Are you sure?"
        icon="danger"
      />
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Verify that the danger icon is displayed
    const dangerIcon = screen.getByLabelText(/exclamation-triangle/i)
    expect(dangerIcon).toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with info icon', () => {
    const { asFragment } = render(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Information"
        icon="info"
      />
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Verify that the info icon is displayed
    const infoIcon = screen.getByLabelText(/info-circled/i)
    expect(infoIcon).toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  it('closes dialog when isDone is true', () => {
    const { rerender, asFragment } = render(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Are you sure?"
        isDone={false}
      />
    )

    // Open the dialog
    const triggerButton = screen.getByText('Open Dialog')
    fireEvent.click(triggerButton)

    // Rerender the component with isDone set to true
    rerender(
      <ConfirmationDialog
        triggerButton={<Button>Open Dialog</Button>}
        confirmButton={<Button>Confirm</Button>}
        title="Are you sure?"
        isDone={true}
      />
    )

    // Verify that the dialog is closed
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument()

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
