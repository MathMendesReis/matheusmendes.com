import type { Metadata } from 'next'
import Link from 'next/link'
import ArrowLeft from '../components/arrow-left'



export const metadata: Metadata = {
  title: 'Matheus Mendes',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className='flex flex-col items-center '>
      <header className="h-[4.5rem] flex items-center justify-between w-2/3">
        <Link href={'/'}>
          <ArrowLeft/>
        </Link>
        <section className="w-[153.61px] h-6 left-[1102.39px] flex gap-5">
          <Link href={'/projetos'} className="w-[61.86px] h-6  text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Projetos</Link>
          <Link href={'/contatos'} className="w-[60.52px] h-6  text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Contatos</Link>
        </section> 
      </header>
      <main className='flex flex-col items-center justify-center' >{children}</main>
    </body>
  )
}
