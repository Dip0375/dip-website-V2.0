// lib/api.ts
import { getSanityClient } from './sanity'
import { fetchAllPostsQuery, fetchAllSkillsQuery, fetchCertificationsQuery, fetchProjectsQuery, fetchWorkExperienceQuery } from './queries'
import { Post } from '../../types/post'
import { Skill } from '../../types/Skill'
import { Certification } from '../../types/certification'
import { Project } from '../../types/project'
import { WorkExperience } from '../../types/workExperience'

export async function fetchAllPosts(): Promise<Post[]> {
  return getSanityClient().fetch(fetchAllPostsQuery)
}


export const fetchSkills = async (): Promise<Skill[]> => {
  return await getSanityClient().fetch(fetchAllSkillsQuery)
}

export const fetchCertifications = async (): Promise<Certification[]> => {
  return await getSanityClient().fetch(fetchCertificationsQuery)
}

export const fetchProjects = async (): Promise<Project[]> => {
  return await getSanityClient().fetch(fetchProjectsQuery)
}

export const fetchWorkExperience = async (): Promise<WorkExperience[]> => {
  return await getSanityClient().fetch(fetchWorkExperienceQuery)
}