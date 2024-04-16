import { LoadingFallback, Table } from '@/components'

import { usePosts } from '../api/getPosts'
import { PostType } from '../types'
import { DeletePost } from './DeletePost'

export const PostsList = () => {
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
