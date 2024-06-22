import React from 'react'

import { ContentLayout } from '@/components'
import { postsConfig } from '@/config'
import { withSuspense } from '@/hoc'

const CreatePost = React.lazy(
  () => import('@/features/posts/components/CreatePost')
)
const PostsList = React.lazy(
  () => import('@/features/posts/components/PostsList')
)

const Posts = () => {
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

export default withSuspense(Posts)
