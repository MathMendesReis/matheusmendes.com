import { Projects } from '@/types/product'
import api from './api'

export async function getProductsFecth(): Promise<Projects[]> {
  const response = await api('/users/MathMendesReis/repos', {})

  const projects = await response.json()
  const filteredProjects = projects.map((project: { name: string }) => {
    return {
      ...project,
      name: project.name.replace('-', ' '),
    }
  })

  return filteredProjects
}
