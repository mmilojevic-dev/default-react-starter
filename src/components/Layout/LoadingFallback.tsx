import { Spinner } from '@/components'
import { cn } from '@/utils'

interface LoadingFallbackProps {
  fullscreen?: boolean
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  fullscreen = false
}) => {
  return (
    <div
      className={cn('relative', fullscreen ? 'w-screen h-screen' : 'size-full')}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <Spinner size="xl" />
      </div>
    </div>
  )
}
