import { ContentLayout } from '@/components'
import { postsConfig } from '@/config'

import { CreatePost } from '../components/CreatePost'
import { PostsList } from '../components/PostsList'

export const Posts = () => {
  return (
    <ContentLayout title={postsConfig.title}>
      <div className="flex justify-end">
        <CreatePost />
      </div>
      <div className="mt-4">
        <PostsList />
      </div>
    </ContentLayout>
  )
}
