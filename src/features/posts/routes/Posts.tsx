import { ContentLayout } from '@/components'
import { POSTS } from '@/config'

import { PostsList } from '../components/PostsList'

export const Posts = () => {
  return (
    <ContentLayout title={POSTS.TITLE}>
      <PostsList />
    </ContentLayout>
  )
}
