import { formatDate } from '@/utils/formatDate'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
  id: string,
  name: string
  created_at: string
  description: string
  html_url: string
  homepage: string
}
export default function CardProject({ id, created_at, description, html_url, name, homepage }: Props) {
  return (
    <div key={id} className=" sm:w-[18rem] w-full h-[12rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-md p-4 flex flex-col gap-1">
      <header>
        <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(created_at)}</time>
      </header>
      <main className='flex flex-col gap-1'>
        <h2 className=" w-full min-h-15 text-zinc-100 sm:text-2xl font-bold font-['Inter'] leading-10">{name}</h2>
        <p className="w-full h-12 line-clamp-5 text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{description}</p>
      </main>
      <footer className='flex items-center justify-end mt-auto gap-3' >
        {homepage && <Link href={homepage} target='_blank'>
          <ExternalLink size={18} color='white' />
        </Link >}
        <Link href={html_url ? html_url : ''} target='_blank'>
          <Github size={18} color='white'/>
        </Link>
      </footer>
    </div>
  )
}
