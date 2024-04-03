import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/utils'

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField = ({
  type = 'text',
  className,
  registration,
  error
}: InputFieldProps) => {
  return (
    <FieldWrapper error={error}>
      <input
        type={type}
        className={cn(
          `block w-full appearance-none rounded-md border px-3 py-2
          placeholder:text-muted-foreground focus:border-accent focus:outline-none
          focus:ring-accent sm:text-sm`,
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}
