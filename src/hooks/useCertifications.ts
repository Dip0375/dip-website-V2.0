import { useQuery } from '@tanstack/react-query'
import { Certification } from '../../types/certification'
import { fetchCertifications } from '@/lib/api'

export const useCertifications = () =>
  useQuery<Certification[], Error>({
    queryKey: ['certifications'],
    queryFn: fetchCertifications,
    staleTime: 5 * 60 * 1000,
  })