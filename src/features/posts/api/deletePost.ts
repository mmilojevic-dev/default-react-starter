import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'

import { axiosInstance } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'
import { addNotification, AppDispatch } from '@/store'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

import { PostType } from '../types'

export const deletePost = ({ postId }: { postId: number }) => {
  return axiosInstance.delete(`/posts/${postId}`)
}

type UseDeletePostOptions = {
  config?: MutationConfig<typeof deletePost>
}

export const useDeletePost = ({ config }: UseDeletePostOptions = {}) => {
  const dispatch = useDispatch<AppDispatch>()

  return useMutation({
    onMutate: async (deletedPost) => {
      await queryClient.cancelQueries('posts')

      const previousPosts = queryClient.getQueryData<PostType[]>('posts')

      queryClient.setQueryData(
        'posts',
        previousPosts?.filter((post) => post.id !== deletedPost.postId)
      )

      return { previousPosts }
    },
    onError: (error, __, context: any) => {
      dispatch(
        addNotification(
          NotificationEnum.Error,
          'Post Deletion Error',
          getErrorMessage(error)
        )
      )
      if (context?.previousPosts) {
        queryClient.setQueryData('posts', context.previousPosts)
      }
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries('posts')
      dispatch(
        addNotification(
          NotificationEnum.Success,
          'Post Deleted',
          `Post with id ${postId} has been deleted.`
        )
      )
    },
    ...config,
    mutationFn: deletePost
  })
}
