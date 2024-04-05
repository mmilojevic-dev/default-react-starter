import { Button } from '@/components'
import { ERRORS } from '@/config'

type ErrorFallbackProps = {
  error?: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <h1 className="font-bold text-foreground">{ERRORS.FALLBACK_TEXT}</h1>
      <pre className="w-full max-w-96 text-foreground">{error?.message}</pre>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        {ERRORS.FALLBACK_BUTTON_LABEL}
      </Button>
    </div>
  )
}
