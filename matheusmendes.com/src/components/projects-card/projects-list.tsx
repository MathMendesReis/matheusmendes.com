import React from 'react'
import ProjectCard from './project-card'
import { getProductsFecth } from '@/service/getProductsFecth'

export default async function ProjectsList() {
  const data = await getProductsFecth()

  const listItems = data.map(({ id, ...rest }) => (
    <li key={id}>
      <ProjectCard id={id} {...rest} />
    </li>
  ))
  return (
    <ul className="flex flex-wrap w-full lg:w-[1440px] gap-y-20	gap-x-9 items-center justify-center">
      {listItems}
    </ul>
  )
}
