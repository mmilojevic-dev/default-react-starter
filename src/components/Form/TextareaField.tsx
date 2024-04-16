import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/utils'

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string
  registration: Partial<UseFormRegisterReturn>
  placeholder: string
}

export const TextAreaField = ({
  placeholder,
  className,
  registration,
  error
}: TextAreaFieldProps) => {
  return (
    <FieldWrapper error={error}>
      <textarea
        className={cn(
          `block w-full appearance-none rounded-md border border-border px-3 py-2 shadow-sm
          placeholder:text-muted-foreground focus:border-accent focus:outline-none
          sm:text-sm bg-transparent`,
          className
        )}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  )
}
