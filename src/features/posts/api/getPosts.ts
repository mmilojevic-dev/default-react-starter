import { useQuery } from '@tanstack/react-query'

import { postsConfig } from '@/config'
import { axiosClient } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

import { PostType } from '../types'

export const getPosts = (): Promise<PostType[]> => {
  return axiosClient.get(postsConfig.apipath)
}

type QueryFnType = typeof getPosts

type UsePostsOptions = {
  config?: QueryConfig<QueryFnType>
}

export const usePosts = ({ config }: UsePostsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [postsConfig.queryKey],
    queryFn: () => getPosts()
  })
}
