import { TrashIcon } from 'lucide-react'

import { Button, ConfirmationDialog, Spinner } from '@/components'
import { deletePostConfig } from '@/config'

import { useDeletePost } from '../api/deletePost'

type DeletePostProps = {
  id: number
}

export const DeletePost = ({ id }: DeletePostProps) => {
  const deletePostMutation = useDeletePost()

  return (
    <ConfirmationDialog
      icon="danger"
      title={deletePostConfig.confirmationModal.title}
      body={deletePostConfig.confirmationModal.body}
      triggerButton={
        <Button variant="destructive">
          <TrashIcon className="mr-1 size-4" />
          {deletePostConfig.triggerButtonLabel}
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
          {deletePostMutation.isPending && (
            <Spinner size="sm" className="mr-2 text-foreground" />
          )}
          {deletePostConfig.confirmationModal.confirmButtonLabel}
        </Button>
      }
      isDone={deletePostMutation.isSuccess}
    />
  )
}
