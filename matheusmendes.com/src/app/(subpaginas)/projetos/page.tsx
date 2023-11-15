import Link from 'next/link'
import React from 'react'
import data from '@/service/projects.json'




export default function Projetos() {
  return (
    <>
      <header className='flex flex-col w-2/3 mt-14'>
        <h1 className="w-[139.36px] h-10 text-zinc-100 text-4xl font-bold font-['Inter'] leading-10">{data.headerTexts.content}</h1>
        <p className="w-full sm:w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{data.headerTexts.paragraph}</p>
      </header>
      <div className="w-2/3 h-px bg-zinc-800 mt-20 mb-16" />
      <main className='flex flex-col items-center '>
        <section className='flex gap-9 items-start justify-center flex-wrap'>
          <article className="sm:w-[36.875rem] w-full  min-h-[28.75rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-9">
            <header>
              <time className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">maio de 2023</time>
            </header>
            <main>
              <h2 className="w-[139.36px] h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">Labeedit</h2>
              <p className="sm:w-[502.60px] w-3/4  h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem suscipit ipsa consequuntur accusantium voluptate harum numquam eos dignissimos nulla. Hic quaerat dolores eius, quisquam adipisci mollitia numquam eaque nihil.</p>
            </main>
            <footer className='mt-auto'>
              <Link href={''}>
                <p className=" sm:w-[502.60px] w-full min-h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Leia mais</p>
              </Link>
            </footer>
          </article>
          <section className='flex flex-col items-center gap-7'>
            {[1, 2].map(() => (
              <>
               <article className="w-[392.66px] min-h-[12rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4">
                <header>
                  <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">maio de 2023</time>
                </header>
                <main>
                  <h2 className="w-[139.36px] h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">Labeedit</h2>
                  <p className="w-full  text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem suscipit ipsa consequuntur accusantium voluptate harum numquam eos dignissimos nulla. Hic quaerat dolores eius, quisquam adipisci mollitia numquam eaque nihil.</p>
                </main>
              </article>
              </>
            ))}
          </section>
        </section>
        <div className="w-2/3 h-px bg-zinc-800 mt-20 mb-16" />
        <section className='ml-auto mr-auto mb-16 flex items-center justify-center  gap-2 flex-wrap'>
          {[1, 2, 3, 4,5,6,7,8].map(() => (
            <>
              <article className="w-[392.66px] min-h-[12rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4">
                <header>
                  <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">maio de 2023</time>
                </header>
                <main>
                  <h2 className="w-[139.36px] h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">Labeedit</h2>
                  <p className="w-full  text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem suscipit ipsa consequuntur accusantium voluptate harum numquam eos dignissimos nulla. Hic quaerat dolores eius, quisquam adipisci mollitia numquam eaque nihil.</p>
                </main>
              </article>
            </>
          ))}
        </section>
      </main>

    </>
  )
}
