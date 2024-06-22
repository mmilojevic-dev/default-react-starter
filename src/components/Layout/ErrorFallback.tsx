import { Button } from '@/components/Elements/Button'
import { errorsConfig } from '@/config'
import { withSuspense } from '@/hoc/withSuspense'

type ErrorFallbackProps = {
  error?: Error
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
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

export default withSuspense(ErrorFallback, true)
