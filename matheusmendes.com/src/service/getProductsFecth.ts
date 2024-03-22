import { Project, ProjectOut } from '@/types/project'
import api from './api'

export async function getProductsFecth(): Promise<ProjectOut[]> {
  const response = await api('/users/MathMendesReis/repos', {
    next: { revalidate: 10 },
  })

  const projects = (await response.json()) as Project[]

  const names = ['Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos']

  const filteredProjects = projects
    .filter((project) => !names.includes(project.name.replace('-', ' ')))
    .map((project) => {
      return {
        ...project,
        createdAt: project.created_at,
        name: project.name.replace('-', ' '),
      }
    })

  return filteredProjects
}
