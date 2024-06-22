import { Outlet } from 'react-router-dom'

import { MainLayout } from '@/components'
import { withSuspense } from '@/hoc'

const LayoutProvider = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default withSuspense(LayoutProvider, true)
