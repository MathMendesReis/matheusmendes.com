import React from 'react'
import api from '@/service/api'
import Data from '@/service/projects.json'
import Bar from '@/app/components/divBar'
import { ExternalLinkIcon, Github } from 'lucide-react'
import { CardProject } from '@/app/components/card-project/index'

async function getFeaturedProducts(): Promise<Projects[]> {
  const response = await api('/users/MathMendesReis/repos', {
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

  return (
    <>
      <header className='flex flex-col w-full mt-14 animate-title '>
        <h1 className="w-full h-10 text-zinc-100 sm:text-4xl text-3xl font-bold font-['Inter'] leading-10 animate-title">{Data.headerTexts.content}</h1>
        <p className="w-full sm:w-[31.375rem] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{Data.headerTexts.paragraph}</p>
      </header>
      <main className='flex flex-col items-center'>
        <Bar />
        <section className='flex flex-wrap justify-center gap-8 items-center animate-title'>
          {data.map(({ id, name, html_url, description, created_at, homepage,language,topics }) => {
          {
              return (
             <>
                <CardProject.Root key={id}>
                 <main className='flex flex-col gap-4'>
                  <section className='mt-auto'>
                      <CardProject.Time created_at={created_at} />
                      <CardProject.Name name={name} />
                      <CardProject.Desc description={description} />
                  </section>
                    <section className='flex items-center justify-center gap-3'>
                      {
                        language &&
                      <div className='border-2 border-indigo-500 w-36 px-8 py-2 rounded-full flex items-center justify-center'>
                       <p >{language}</p>
                      </div>
                      }
                      {topics && topics.map((topic)=>(
                         <div key={id} className='border-2 border-indigo-500 w-36 px-8 py-2 rounded-full flex items-center justify-center'>
                           <p key={id} >{topic}</p>
                        </div>
                      ))}
                    </section>
                 </main>

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
                <Bar />

             </>
              )
            }
          })}

        </section>
      </main>

    </>
  )
}
