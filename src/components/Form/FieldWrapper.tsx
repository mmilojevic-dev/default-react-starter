import * as React from 'react'
import { FieldError } from 'react-hook-form'

type FieldWrapperProps = {
  className?: string
  children: React.ReactNode
  error?: FieldError | undefined
  description?: string
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { className, error, children } = props
  return (
    <div className={className}>
      <div className="mb-1">{children}</div>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-destructive-foreground"
        >
          {error.message}
        </div>
      )}
    </div>
  )
}
