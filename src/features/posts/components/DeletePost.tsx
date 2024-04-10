import { TrashIcon } from 'lucide-react'

import { Button, ConfirmationDialog, Spinner } from '@/components'

import { useDeletePost } from '../api/deletePost'

type DeletePostProps = {
  id: number
}

export const DeletePost = ({ id }: DeletePostProps) => {
  const deletePostMutation = useDeletePost()

  return (
    <ConfirmationDialog
      icon="danger"
      title="Delete Post"
      body="Are you sure you want to delete this post?"
      triggerButton={
        <Button variant="destructive">
          <TrashIcon className="size-4" />
          Delete Post
        </Button>
      }
      confirmButton={
        <Button
          type="button"
          variant="destructive"
          onClick={async () =>
            await deletePostMutation.mutateAsync({ postId: id })
          }
        >
          {deletePostMutation.isLoading && (
            <Spinner size="sm" className="text-foreground" />
          )}
          Delete Post
        </Button>
      }
    />
  )
}
