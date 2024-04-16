import { ContentLayout } from '@/components'
import { POSTS } from '@/config'

import { CreatePost } from '../components/CreatePost'
import { PostsList } from '../components/PostsList'

export const Posts = () => {
  return (
    <ContentLayout title={POSTS.TITLE}>
      <div className="flex justify-end">
        <CreatePost />
      </div>
      <div className="mt-4">
        <PostsList />
      </div>
    </ContentLayout>
  )
}
