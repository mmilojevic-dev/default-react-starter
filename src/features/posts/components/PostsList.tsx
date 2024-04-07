import { LoadingFallback, Table } from '@/components'

import { usePosts } from '../api/getPosts'

export const PostsList = () => {
  const postsQuery = usePosts()

  if (postsQuery.isLoading) {
    return <LoadingFallback />
  }

  if (!postsQuery.data) return null

  return (
    <Table
      data={postsQuery.data}
      columns={[
        {
          title: 'User ID',
          field: 'userId'
        },
        {
          title: 'ID',
          field: 'id'
        },
        {
          title: 'Title',
          field: 'title'
        },
        {
          title: 'Body',
          field: 'body',
          Cell: ({ entry }) => (
            <span className="text-muted-foreground">{entry.body}</span>
          )
        }
      ]}
    />
  )
}
