import { Button } from '@/components'
import { errorsConfig } from '@/config'

type ErrorFallbackProps = {
  error?: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center gap-6"
      role="alert"
    >
      <h1 className="font-bold text-foreground">{errorsConfig.fallbackText}</h1>
      <p className="w-full max-w-xl text-center font-mono text-foreground">
        {error?.message}
      </p>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        {errorsConfig.fallbackButtonLabel}
      </Button>
    </div>
  )
}
