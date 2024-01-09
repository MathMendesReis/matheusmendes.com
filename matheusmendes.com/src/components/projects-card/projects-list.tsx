/* eslint-disable camelcase */
import React from 'react'
import ProjectCard from './project-card'
import { getProductsFecth } from '@/service/getProductsFecth'

export default async function ProjectsList() {
  const data = await getProductsFecth()

  const listItems = data.map(
    ({ id, created_at, description, name, html_url, homepage }) => (
      <li key={id}>
        <ProjectCard
          created_at={created_at}
          description={description}
          name={name}
          id={id}
          html_url={html_url}
          homepage={homepage}
        />
      </li>
    ),
  )
  return (
    <ul className="flex flex-wrap w-full lg:w-[1440px] gap-y-20	gap-x-9 items-center justify-center">
      {listItems}
    </ul>
  )
}
