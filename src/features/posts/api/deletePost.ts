import { QueryKey, useMutation } from '@tanstack/react-query'

import { deletePostConfig, postsConfig } from '@/config'
import { axiosClient } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'
import { useNotificationStore } from '@/store'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

import { PostType } from '../types'

export const deletePost = ({ postId }: { postId: number }) => {
  return axiosClient.delete(`${postsConfig.apipath}/${postId}`)
}

type UseDeletePostOptions = {
  config?: MutationConfig<typeof deletePost>
}

export const useDeletePost = ({ config }: UseDeletePostOptions = {}) => {
  const { addNotification } = useNotificationStore()

  const queryKey: QueryKey = [postsConfig.queryKey]

  return useMutation({
    onMutate: async (deletedPost) => {
      await queryClient.cancelQueries({ queryKey })

      const previousPosts = queryClient.getQueryData<PostType[]>(queryKey)

      queryClient.setQueryData(
        queryKey,
        previousPosts?.filter((post) => post.id !== deletedPost.postId)
      )

      return { previousPosts }
    },
    onError: (error, __, context: any) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(queryKey, context.previousPosts)
      }
      addNotification(
        NotificationEnum.Error,
        deletePostConfig.status.error.title,
        getErrorMessage(error)
      )
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries({ queryKey })
      addNotification(
        NotificationEnum.Success,
        deletePostConfig.status.success.title,
        deletePostConfig.status.success.message(postId)
      )
    },
    ...config,
    mutationFn: deletePost
  })
}
