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
    <body className='flex flex-col items-center'>
      <header className=" w-[1280px] h-[72px] relative">
        <section className="w-[153.61px] h-6 left-[1102.39px] top-[24px] absolute">
          <Link href={'/projetos'} className="w-[61.86px] h-6 left-0 top-0 absolute text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Projetos</Link>
          <Link href={'/contatos'} className="w-[60.52px] h-6 left-[93.47px] top-0 absolute text-zinc-400 text-base font-normal font-['Inter'] leading-normal">Contatos</Link>
        </section>
        <Link href={'/'} className="w-6 h-6 left-[24px] top-[24px] absolute" >
          <ArrowLeft />
        </Link>
      </header>
      <main>{children}</main>
    </body>
  )
}
