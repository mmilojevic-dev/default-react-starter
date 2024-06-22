import { Outlet } from 'react-router-dom'

import { MainLayout } from '@/components/Layout/MainLayout'
import { withSuspense } from '@/hoc/withSuspense'

const LayoutProvider = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default withSuspense(LayoutProvider, true)
