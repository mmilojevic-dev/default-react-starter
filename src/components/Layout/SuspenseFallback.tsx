import { Spinner } from '@/components'

export const SuspenseFallback: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Spinner size="xl" />
    </div>
  )
}
