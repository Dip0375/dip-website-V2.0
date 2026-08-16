// lib/api.ts
import { sanityClient } from './sanity'
import { fetchAllPostsQuery, fetchAllSkillsQuery, fetchCertificationsQuery, fetchProjectsQuery, fetchWorkExperienceQuery } from './queries'
import { Post } from '../../types/post'
import { Skill } from '../../types/Skill'
import { Certification } from '../../types/certification'
import { Project } from '../../types/project'
import { WorkExperience } from '../../types/workExperience'

export async function fetchAllPosts(): Promise<Post[]> {
  return sanityClient.fetch(fetchAllPostsQuery)
}


export const fetchSkills = async (): Promise<Skill[]> => {
  return await sanityClient.fetch(fetchAllSkillsQuery)
}

export const fetchCertifications = async (): Promise<Certification[]> => {
  return await sanityClient.fetch(fetchCertificationsQuery)
}

export const fetchProjects = async (): Promise<Project[]> => {
  return await sanityClient.fetch(fetchProjectsQuery)
}

export const fetchWorkExperience = async (): Promise<WorkExperience[]> => {
  return await sanityClient.fetch(fetchWorkExperienceQuery)
}