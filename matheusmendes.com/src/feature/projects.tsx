import ProjectsList from '@/components/projects-card/projects-list'
import Text from '@/components/typography/components/text'
import React from 'react'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-start w-full mt-52 sm:mt-3"
    >
      <div className="flex flex-col items-center  py-11 w-full">
        <Text as="p" className="reval">
          Projetos
        </Text>
        <Text as="h1" size="2xl" className="reval">
          Dê uma olhada nos meus projetos
        </Text>
      </div>
      <main className="w-full">{<ProjectsList />}</main>
    </section>
  )
}
