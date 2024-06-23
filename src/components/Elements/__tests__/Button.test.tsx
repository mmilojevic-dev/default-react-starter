import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button, buttonVariants } from '@/components/Elements/Button'

// Explicitly defined variants and sizes
const variantKeys = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link'
] as const
const sizeKeys = ['default', 'sm', 'lg', 'icon'] as const

describe('Button', () => {
  it('renders correctly with default props', () => {
    // Render the Button component with default props
    const { asFragment } = render(<Button>Click me</Button>)

    // Verify that the button is rendered with the correct text and classes
    const button = screen.getByText('Click me')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-primary/90 bg-primary text-primary-foreground'
    )

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })

  variantKeys.forEach((variant) => {
    it(`renders with ${variant} variant`, () => {
      // Render the Button component with each variant
      const { asFragment } = render(<Button variant={variant}>Click me</Button>)

      // Verify that the button has the correct variant classes
      const button = screen.getByText('Click me')
      expect(button).toHaveClass(buttonVariants({ variant }))

      // Generate snapshot
      expect(asFragment()).toMatchSnapshot()
    })
  })

  sizeKeys.forEach((size) => {
    it(`renders with ${size} size`, () => {
      // Render the Button component with each size
      const { asFragment } = render(<Button size={size}>Click me</Button>)

      // Verify that the button has the correct size classes
      const button = screen.getByText('Click me')
      expect(button).toHaveClass(buttonVariants({ size }))

      // Generate snapshot
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('handles click event', () => {
    // Mock the click handler function
    const handleClick = vi.fn()
    const { asFragment } = render(
      <Button onClick={handleClick}>Click me</Button>
    )

    // Click the button and verify that the click handler is called
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)

    // Generate snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
