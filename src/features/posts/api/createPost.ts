import { QueryKey, useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

import { axiosClient } from '@/lib/axios'
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
  return axiosClient.post(`/posts`, data)
}

type UseCreatePostOptions = {
  config?: MutationConfig<typeof createPost>
}

export const useCreatePost = ({ config }: UseCreatePostOptions = {}) => {
  const dispatch = useDispatch<AppDispatch>()
  const queryKey: QueryKey = ['posts']

  return useMutation({
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey })

      const previousPosts = queryClient.getQueryData<PostType[]>(queryKey)

      queryClient.setQueryData(queryKey, [
        ...(previousPosts || []),
        newPost.data
      ])

      return { previousPosts }
    },
    onError: (error, __, context: any) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(queryKey, context.previousPosts)
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
      queryClient.invalidateQueries({ queryKey })
      dispatch(
        addNotification(
          NotificationEnum.Success,
          'Post Created',
          'You have successfully created post.'
        )
      )
    },
    ...config,
    mutationFn: createPost
  })
}
