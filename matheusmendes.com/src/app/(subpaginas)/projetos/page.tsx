import Link from 'next/link'
import React from 'react'

export default function Projetos() {
  return (
    <>
      <header className='flex flex-col w-full mt-14'>
        <h1 className="w-[139.36px] h-10 text-zinc-100 text-4xl font-bold font-['Inter'] leading-10">Projects</h1>
        <p className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Alguns dos projetos são de trabalho e outros são do meu tempo livre.</p>
      </header>
      <div className="lg:w-[1216px] h-px bg-zinc-800 mt-20 mb-16" />
      <main>
        <section className='grid lg:grid-cols-2 gap-9'>
          <article className="w-[36.875rem] h-[28.75rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md p-4 flex flex-col gap-9">
            <header>
            <time className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">maio de 2023</time>
            </header>
            <main>
              <h2 className="w-[139.36px] h-10 text-zinc-100 text-3xl font-bold font-['Inter'] leading-10">Labeedit</h2>
              <p className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem suscipit ipsa consequuntur accusantium voluptate harum numquam eos dignissimos nulla. Hic quaerat dolores eius, quisquam adipisci mollitia numquam eaque nihil.</p>
            </main>
            <footer className='mt-auto'>
              <Link href={''}>
                <p className="w-[502.60px] h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Leia mais</p>
              </Link>
            </footer>
          </article>
          <section className='flex flex-col items-center gap-9'>
            <article className="w-[36.875rem] h-[13.25rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
            <article className="w-[36.875rem] h-[13.25rem] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
          </section>
        </section>
        <div className="lg:w-[1216px] h-px bg-zinc-800 mt-20 mb-16" />
        <section className='mb-16 grid grid-cols-3 gap-9'>
          <article className="w-[392.66px] h-[192px] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
          <article className="w-[392.66px] h-[192px] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
          <article className="w-[392.66px] h-[192px] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
          <article className="w-[392.66px] h-[192px] bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-md"></article>
        </section>
      </main>

    </>
  )
}
