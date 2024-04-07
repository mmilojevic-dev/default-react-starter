import { ContentLayout } from '@/components/Layout'

import { PostsList } from '../components/PostsList'

export const Posts = () => {
  return (
    <ContentLayout title="Posts">
      <PostsList />
    </ContentLayout>
  )
}
