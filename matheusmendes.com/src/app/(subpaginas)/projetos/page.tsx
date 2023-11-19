import Link from 'next/link'
import React from 'react'
import api from '@/service/api'
import Data from '@/service/projects.json'
import { formatDate } from '@/utils/formatDate'
import CardProject from '@/app/components/card-project'
import Bar from '@/app/components/divBar'

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
        <Bar />
        <section className='flex gap-9 items-start justify-center flex-wrap w-full'>
          <Link href={featured.html_url} className="flex-1 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-9">
            <header>
              <time className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(featured?.created_at)}</time>
            </header>
            <main>
              <h2 className="w-full h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{featured.name}</h2>
              <p className="w-full h-56 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{featured.description}</p>
            </main>
            <footer className='mt-auto'>
              <Link href={featured?.html_url}>
                <p className=" sm:flex-1 w-full min-h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Leia mais</p>
              </Link>
            </footer>
          </Link>
          <section className='grid grid-rows-2 gap-8'>
            {data.map(({id,name,html_url,description,created_at},index) => {
              if(index === itemOne || index === itemTwo){
                return (
                  <Link href={html_url ? html_url : ''} target='_blank' key={id} className="w-full lg:w-[32rem] h-[12rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-1">
                    <header>
                      <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(created_at)}</time>
                    </header>
                    <main className='flex flex-col gap-1'>
                      <h2 className=" w-full h-15 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{name}</h2>
                      <p className="w-full h-12 line-clamp-5 text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{description}</p>
                    </main>
                  </Link>
                )
              }
            })}
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
