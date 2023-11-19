import Link from 'next/link'
import React from 'react'
import api from '@/service/api'
import Data from '@/service/projects.json'
import { formatDate } from '@/utils/formatDate'
import CardProject from '@/app/components/card-project'
import Bar from '@/components/divBar'

async function getFeaturedProducts(): Promise<Projects[]> {
  const response = await api('/users/MathMendesReis/repos', {
    next: {
      revalidate: 60 * 60,
    }
  })

  const projects = await response.json()

  return projects
}

export default async function Projetos() {
  const [featured, ...data] = await getFeaturedProducts()
  const min = 0;
  const max = data.length - 1;
  const itemOne: number = Math.floor(Math.random() * (max - min + 1)) + min;
  const itemTwo: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <header className='flex flex-col w-full mt-14'>
        <h1 className="w-full h-10 text-zinc-100 text-4xl font-bold font-['Inter'] leading-10">{Data.headerTexts.content}</h1>
        <p className="w-full sm:w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{Data.headerTexts.paragraph}</p>
      </header>
      <main className='flex flex-col items-center '>
      <Bar/>
        <section className='flex gap-9 items-start justify-center flex-wrap'>
          <Link href={featured.html_url} className="w-[24.5rem]  md:w-[55%]  min-h-[25.75rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-9">
            <header>
              <time className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(featured?.created_at)}</time>
            </header>
            <main>
              <h2 className="w-full h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{featured.name}</h2>
              <p className="w-full h-56 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{featured.description}</p>
            </main>
            <footer className='mt-auto'>
              <Link href={featured?.html_url}>
                <p className=" sm:w-[502.60px] w-full min-h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Leia mais</p>
              </Link>
            </footer>
          </Link>
          <section className='flex flex-col items-center gap-7'>
            <CardProject
              id={data[itemOne].id}
              name={data[itemOne].name}
              created_at={data[itemOne].created_at}
              description={data[itemOne].description}
              html_url={data[itemOne].html_url}
            />
            <CardProject
              id={data[itemTwo].id}
              name={data[itemTwo].name}
              created_at={data[itemTwo].created_at}
              description={data[itemTwo].description}
              html_url={data[itemTwo].html_url}
            />
          </section>
        </section>
        <Bar />
        <section className='flex flex-wrap justify-center gap-4 items-center'>
          {data.map(({ id, name, created_at, description, html_url }) => (
            <CardProject
              key={id}
              id={id}
              name={name}
              created_at={created_at}
              description={description}
              html_url={html_url}
            />
          ))}
        </section>
      </main>

    </>
  )
}
