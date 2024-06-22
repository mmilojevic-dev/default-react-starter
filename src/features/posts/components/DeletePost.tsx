import { TrashIcon } from 'lucide-react'

import { Button } from '@/components/Elements/Button'
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog'
import { Spinner } from '@/components/Elements/Spinner'
import { deletePostConfig } from '@/config'
import { useDeletePost } from '@/features/posts/api/deletePost'

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
