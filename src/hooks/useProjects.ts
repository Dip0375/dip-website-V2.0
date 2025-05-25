import { useQuery } from "@tanstack/react-query";
import { Project } from "../../types/project";
import { fetchProjects } from "@/lib/api";

export const useProjects = () =>
  useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
  })