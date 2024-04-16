import { TrashIcon } from 'lucide-react'

import { Button, ConfirmationDialog, Spinner } from '@/components'
import { DELETE_POST } from '@/config'

import { useDeletePost } from '../api/deletePost'

type DeletePostProps = {
  id: number
}

export const DeletePost = ({ id }: DeletePostProps) => {
  const deletePostMutation = useDeletePost()

  return (
    <ConfirmationDialog
      icon="danger"
      title={DELETE_POST.CONFIRMATION_MODAL.TITLE}
      body={DELETE_POST.CONFIRMATION_MODAL.BODY}
      triggerButton={
        <Button variant="destructive">
          <TrashIcon className="mr-1 size-4" />
          {DELETE_POST.TRIGGER_BUTTON_LABEL}
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
            <Spinner size="sm" className="mr-2 text-foreground" />
          )}
          {DELETE_POST.CONFIRMATION_MODAL.CONFIRM_BUTTON_LABEL}
        </Button>
      }
      isDone={deletePostMutation.isSuccess}
    />
  )
}
