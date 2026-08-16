import { useQuery } from "@tanstack/react-query";
import { WorkExperience } from "../../types/workExperience";
import { fetchWorkExperience } from "@/lib/api";

export const useWorkExperience = () =>
  useQuery<WorkExperience[], Error>({
    queryKey: ['workExperience'],
    queryFn: fetchWorkExperience,
    staleTime: 5 * 60 * 1000,
  })