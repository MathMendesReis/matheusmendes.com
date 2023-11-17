import Link from 'next/link'
import React from 'react'
import api from '@/service/api'
import Data from '@/service/projects.json'
import { formatDate } from '@/utils/formatDate'

async function getFeaturedProducts(): Promise<Projects[]> {
  const response = await api('/users/MathMendesReis/repos')

  const projects = await response.json()

  return projects
}

export default async function Projetos() {
  const [featured ,...data] = await getFeaturedProducts()
  const min = 0;
  const max = data.length;
  const itemOne: number = Math.floor(Math.random() * (max - min + 1)) + min;
  const itemTwo: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <header className='flex flex-col w-2/3 mt-14'>
        <h1 className="w-full h-10 text-zinc-100 text-4xl font-bold font-['Inter'] leading-10">{Data.headerTexts.content}</h1>
        <p className="w-full sm:w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{Data.headerTexts.paragraph}</p>
      </header>
      <div className="w-2/3 h-px bg-zinc-800 mt-20 mb-16" />
      <main className='flex flex-col items-center '>
        <section className='flex gap-9 items-start justify-center flex-wrap'>
          <Link href={featured.html_url?featured.html_url:''}  className="sm:w-[36.875rem] w-full  min-h-[28.75rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-9">
            <header>
              <time className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(featured?.created_at)}</time>
            </header>
            <main>
              <h2 className="w-full h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{featured?.name}</h2>
              <p className="sm:w-[502.60px] w-3/4  h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{featured?.description}</p>
            </main>
            <footer className='mt-auto'>
              <Link href={featured?.html_url}>
                <p className=" sm:w-[502.60px] w-full min-h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Leia mais</p>
              </Link>
            </footer>
          </Link>
          <section className='flex flex-col items-center gap-7'>
            <Link href={data[itemOne].html_url} className="w-[392.66px] min-h-[13.5rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4">
              <header>
                <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(data[itemOne].created_at)}</time>
              </header>
              <main>
                <h2 className="w-full h-10 text-ellipsis text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{data[itemOne].name}</h2>
                <p className="w-full text-ellipsis	 text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{data[itemOne].description}</p>
              </main>
            </Link>
            <Link href={data[itemTwo].html_url} className="w-[392.66px] min-h-[13.5rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4">
              <header>
                <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(data[itemTwo].created_at)}</time>
              </header>
              <main>
                <h2 className="w-[139.36px] h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{data[itemTwo].name}</h2>
                <p className="w-full  text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{data[itemTwo].description}</p>
              </main>
            </Link>
          </section>
        </section>
        <div className="w-2/3 h-px bg-zinc-800 mt-20 mb-16" />
        <section className='ml-auto mr-auto mb-16 flex items-start justify-center  gap-5 flex-wrap'>
          {data.slice(0, 6).map(({ id, name, created_at, description, html_url }) => (
            <Link href={html_url?html_url:''} target='_blank' key={id} className="w-[24.5rem] min-h-[12rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4">
              <header>
                <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(created_at)}</time>
              </header>
              <main>
                <h2 className=" w-full h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">{name}</h2>
                <p className="w-full  text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{description}</p>
              </main>
            </Link>
          ))}
        </section>
      </main>

    </>
  )
}
