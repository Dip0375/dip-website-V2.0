import { fetchAllPosts } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchAllPosts,
    staleTime: 5 * 60 * 1000,
  })
}