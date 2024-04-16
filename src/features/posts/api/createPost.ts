import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'

import { axiosInstance } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'
import { addNotification, AppDispatch } from '@/store'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

import { PostType } from '../types'

export type CreatePostDTO = {
  data: {
    title: string
    body: string
  }
}

export const createPost = ({ data }: CreatePostDTO): Promise<PostType> => {
  return axiosInstance.post(`/posts`, data)
}

type UseCreatePostOptions = {
  config?: MutationConfig<typeof createPost>
}

export const useCreatePost = ({ config }: UseCreatePostOptions = {}) => {
  const dispatch = useDispatch<AppDispatch>()

  return useMutation({
    onMutate: async (newPost) => {
      await queryClient.cancelQueries('posts')

      const previousPosts = queryClient.getQueryData<PostType[]>('posts')

      queryClient.setQueryData('posts', [
        ...(previousPosts || []),
        newPost.data
      ])

      return { previousPosts }
    },
    onError: (error, __, context: any) => {
      if (context?.previousPosts) {
        queryClient.setQueryData('posts', context.previousPosts)
      }
      dispatch(
        addNotification(
          NotificationEnum.Error,
          'Post Creation Error',
          getErrorMessage(error)
        )
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      dispatch(
        addNotification(
          NotificationEnum.Success,
          'Post Created',
          'You have successfuly created post.'
        )
      )
    },
    ...config,
    mutationFn: createPost
  })
}
