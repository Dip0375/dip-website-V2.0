import { useQuery } from "@tanstack/react-query";
import { Education } from "../../types/education";
import { fetchEducation } from "@/lib/api";

export const useEducation = () =>
  useQuery<Education[], Error>({
    queryKey: ['education'],
    queryFn: fetchEducation,
    staleTime: 5 * 60 * 1000,
  })
