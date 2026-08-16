import { fetchSkills } from '@/lib/api'
import {useQuery} from '@tanstack/react-query'
import { Skill } from '../../types/Skill'

export const useSkills = () => {
  return useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: fetchSkills,
    staleTime: 5 * 60 * 1000,
  })
}