import { useQuery } from 'react-query'

import { POSTS } from '@/config'
import { axiosInstance } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

import { PostType } from '../types'

export const getPosts = (): Promise<PostType[]> => {
  return axiosInstance.get(POSTS.API_PATH)
}

type QueryFnType = typeof getPosts

type UsePostsOptions = {
  config?: QueryConfig<QueryFnType>
}

export const usePosts = ({ config }: UsePostsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [POSTS.QUERY_KEY],
    queryFn: () => getPosts()
  })
}
