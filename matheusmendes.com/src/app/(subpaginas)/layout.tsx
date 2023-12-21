import type { Metadata } from 'next'
import Link from 'next/link'
import ArrowLeft from '../components/arrow-left'
import data from '@/service/home.json'
import meta from '@/service/metadata.json'




export const metadata: Metadata = {
  title: `${meta.metadata.title}`,
  description: `${meta.metadata.metadata}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [home, ...others] = data.links
  return (
    <div className='flex flex-col items-center animate-title'>
      <header className=" z-30 h-[4.5rem] w-full lg:w-[1000px] fixed backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-100 flex items-center justify-between sm:p-0 px-8">
        <Link href={home.href} className=''>
          <ArrowLeft />
        </Link>
        <section className=" h-6  sm:flex gap-5 hidden">
          {others.map(({href,text},index) => {
            return (
              <Link key={index} href={href} className="lg:min-w-[5.8125rem] h-6  ">
                <p className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{text}</p>
              </Link>
            )
          })}
        </section>
      </header>
      <main className='w-full lg:w-[1024px] mt-8 px-8' >{children}</main>
    </div>
  )
}
