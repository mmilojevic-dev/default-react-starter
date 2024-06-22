import { Table } from '@/components/Elements/Table'
import { LoadingFallback } from '@/components/Layout/LoadingFallback'
import { usePosts } from '@/features/posts/api/getPosts'
import { PostType } from '@/features/posts/types'
import { withSuspense } from '@/hoc/withSuspense'

import { DeletePost } from './DeletePost'

const PostsList = () => {
  const postsQuery = usePosts()

  if (postsQuery.isLoading) {
    return <LoadingFallback />
  }

  if (!postsQuery.data) return null

  return (
    <Table<PostType>
      data={postsQuery.data}
      columns={[
        {
          title: 'User ID',
          field: 'userId'
        },
        {
          title: 'Title',
          field: 'title'
        },
        {
          title: 'Body',
          field: 'body'
        },
        {
          title: '',
          field: 'id',
          Cell: ({ entry: { id } }) => <DeletePost id={id} />
        }
      ]}
    />
  )
}

export default withSuspense(PostsList)
