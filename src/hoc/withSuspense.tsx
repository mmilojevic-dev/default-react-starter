import { ComponentType, Suspense } from 'react'

import { LoadingFallback } from '@/components/Layout/LoadingFallback'

export const withSuspense = <P extends object>(
  Component: ComponentType<P>,
  fullscreen: boolean = false
): ComponentType<P> => {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={<LoadingFallback fullscreen={fullscreen} />}>
      <Component {...props} />
    </Suspense>
  )

  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
