import React, { Suspense } from 'react'
import api from '@/service/api'
import Data from '@/service/projects.json'
import Bar from '@/app/components/divBar'
import { ExternalLinkIcon, Github, GithubIcon } from 'lucide-react'
import { CardProject } from '@/app/components/card-project/index'

async function getFeaturedProducts(): Promise<Projects[]> {
  const response = await api('/users/MathMendesReis/repos', {
    next: {
      revalidate: 60 * 60,
    }
  })

  const projects = await response.json()
  const filteredProjects = projects.map((project: { name: string }) => {
    return {
      ...project, name: project.name.replace("-", " "),
    }
  })

  return filteredProjects
}

export default async function Projetos() {
  const data = await getFeaturedProducts()
  const min = 0;
  const max = data.length - 1;
  const itemOne: number = Math.floor(Math.random() * (max - min + 1)) + min;
  const itemTwo: number = Math.floor(Math.random() * (max - min + 1)) + min;
  const featured = 'pomodoro'
  return (
    <>
      <header className='flex flex-col w-full mt-14 '>
        <h1 className="w-full h-10 text-zinc-100 sm:text-4xl text-3xl font-bold font-['Inter'] leading-10">{Data.headerTexts.content}</h1>
        <p className="w-full sm:w-[31.375rem] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{Data.headerTexts.paragraph}</p>
      </header>
      <main className='flex flex-col items-center '>
        <Bar />
        <Suspense fallback={<div className=' animate-pulse space-x-4 flex' />}>

          <section className='flex gap-9 items-start justify-center flex-wrap w-full min-h-[55vh]'>
            {data.map(({ id, name, html_url, description, created_at, homepage }) => {
              if (name.toLocaleLowerCase() === featured.toLocaleLowerCase()) {
                return (
                  <CardProject.Root key={id} width='lg:w-[32rem]' heigth='h-[26rem]'>
                    <CardProject.Time created_at={created_at} />
                    <CardProject.Name name={name} />
                    <CardProject.Desc description={description} />
                    <footer className='flex items-center justify-end gap-3 mt-auto' >
                      <CardProject.LinkWithIcon url={html_url}>
                        {GithubIcon}
                      </CardProject.LinkWithIcon>
                      {homepage &&
                        <CardProject.LinkWithIcon url={homepage}>
                          {ExternalLinkIcon}
                        </CardProject.LinkWithIcon>
                      }
                    </footer>
                  </CardProject.Root>
                )
              }
            })}

            <section className='grid grid-rows-2 gap-8'>
              {data.map(({ id, name, html_url, description, created_at, homepage }, index) => {
                if (index === itemOne || index === itemTwo) {
                  return (
                    <CardProject.Root key={id} width='sm:w-[18rem]'>
                      <CardProject.Time created_at={created_at} />
                      <CardProject.Name name={name} />
                      <CardProject.Desc description={description} />
                      <footer className='flex items-center justify-end gap-3 mt-auto' >
                        <CardProject.LinkWithIcon url={html_url}>
                          {Github}
                        </CardProject.LinkWithIcon>
                        {homepage &&
                          <CardProject.LinkWithIcon url={homepage}>
                            {ExternalLinkIcon}
                          </CardProject.LinkWithIcon>
                        }
                      </footer>
                    </CardProject.Root>
                  )
                }
              })}
            </section>
          </section>
        </Suspense>

        <Bar />
        <section className='flex flex-wrap justify-center gap-8 items-center'>
          {data.map(({ id, name, html_url, description, created_at, homepage }, index) => {
            if (index != itemOne && index != itemTwo && name != featured) {
              return (
                <CardProject.Root key={id}>
                  <CardProject.Time created_at={created_at} />
                  <CardProject.Name name={name} />
                  <CardProject.Desc description={description} />
                  <footer className='flex items-center justify-end gap-3 mt-auto' >
                    <CardProject.LinkWithIcon url={html_url}>
                      {Github}
                    </CardProject.LinkWithIcon>
                    {homepage &&
                      <CardProject.LinkWithIcon url={homepage}>
                        {ExternalLinkIcon}
                      </CardProject.LinkWithIcon>
                    }
                  </footer>
                </CardProject.Root>
              )
            }
          })}

        </section>
      </main>

    </>
  )
}
