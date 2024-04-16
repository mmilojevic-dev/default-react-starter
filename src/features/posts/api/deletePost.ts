import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'

import { DELETE_POST, POSTS } from '@/config'
import { axiosInstance } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'
import { addNotification, AppDispatch } from '@/store'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

import { PostType } from '../types'

export const deletePost = ({ postId }: { postId: number }) => {
  return axiosInstance.delete(`${POSTS.API_PATH}/${postId}`)
}

type UseDeletePostOptions = {
  config?: MutationConfig<typeof deletePost>
}

export const useDeletePost = ({ config }: UseDeletePostOptions = {}) => {
  const dispatch = useDispatch<AppDispatch>()

  return useMutation({
    onMutate: async (deletedPost) => {
      await queryClient.cancelQueries(POSTS.QUERY_KEY)

      const previousPosts = queryClient.getQueryData<PostType[]>(
        POSTS.QUERY_KEY
      )

      queryClient.setQueryData(
        POSTS.QUERY_KEY,
        previousPosts?.filter((post) => post.id !== deletedPost.postId)
      )

      return { previousPosts }
    },
    onError: (error, __, context: any) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(POSTS.QUERY_KEY, context.previousPosts)
      }
      dispatch(
        addNotification(
          NotificationEnum.Error,
          DELETE_POST.STATUS.ERROR.TITLE,
          getErrorMessage(error)
        )
      )
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(POSTS.QUERY_KEY)
      dispatch(
        addNotification(
          NotificationEnum.Success,
          DELETE_POST.STATUS.SUCCESS.TITLE,
          DELETE_POST.STATUS.SUCCESS.MESSAGE(postId)
        )
      )
    },
    ...config,
    mutationFn: deletePost
  })
}
