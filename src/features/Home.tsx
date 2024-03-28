import { ContentLayout, MainLayout } from '@/components'
import { HOME } from '@/config'

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <ContentLayout title={HOME.TITLE}>HOME CONTENT</ContentLayout>
    </MainLayout>
  )
}
