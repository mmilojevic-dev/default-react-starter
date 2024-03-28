import { Button } from '@/components'

type ErrorFallbackProps = {
  error?: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <h2 className="font-bold text-foreground">
        Ooops, something went wrong :
      </h2>
      <pre className="w-full max-w-96 text-foreground">{error?.message}</pre>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}
