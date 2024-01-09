import { Project, ProjectOut } from '@/types/project'
import api from './api'

export async function getProductsFecth(): Promise<ProjectOut[]> {
  const response = await api('/users/MathMendesReis/repos', {})

  const projects = (await response.json()) as Project[] // Cast a resposta da API
  const filteredProjects = projects.map((project) => {
    return {
      ...project,
      createdAt: project.created_at,
      name: project.name.replace('-', ' '),
    }
  })

  return filteredProjects
}
