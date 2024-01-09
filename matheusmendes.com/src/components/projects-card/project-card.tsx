/* eslint-disable camelcase */
import Image from 'next/image'
import React from 'react'
import Text from '../typography/components/text'
import { formatarData } from '@/utils/formatDate'
interface ProjectsCard {
  id: string
  name: string
  created_at: string
  description: string
  html_url: string
  homepage: string
}

export default function ProjectCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  created_at,
  description,
  name,
  html_url,
  homepage,
}: ProjectsCard) {
  return (
    <article className="flex flex-col items-start gap-6 flex-1 self-stretch w-[336px]  bg-zinc-900 p-6 reval">
      <figure className=" p-4 bgColor bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] w-full min-h-40">
        {/* <Image src="./programer.svg" alt="" width={336} height={160} /> */}
      </figure>
      <div className="w-full">
        <header className="w-full  h-6 justify-between items-start inline-flex">
          <Text size="xxs">{formatarData(created_at)}</Text>
          <Image src="./programer.svg" alt="" width={24} height={24} />
        </header>
        <main className="w-[336px] h-16 justify-between items-start inline-flex flex-col">
          <Text size="xxs">{name}</Text>
          <Text size="xxs" className="truncate w-[290px]">
            {description}
          </Text>
        </main>
      </div>
    </article>
  )
}
