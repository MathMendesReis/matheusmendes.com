import React from 'react'
import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

interface Data {
  id: string
  url: string,
  icon: React.ReactNode,
  description: string
}

const data: Data[] = [
  {
    id: '1',
    url: "https://twitter.com/reisMatheusss",
    icon: <Twitter color='white'/>,
    description: "Twitter"
  },
  {
    id: '2',
    url: "matheusmendesreiss@gmail.com",
    icon: <Mail color='white' />,
    description: "Gmail"
  },
  {
    id: '3',
    url: "https://github.com/MathMendesReis",
    icon: <Github color='white'/>,
    description: "Github"
  },
]
export default function Contatos() {
  return (
    <>
        <div className='flex items-center justify-center w-full gap-5 flex-wrap  min-h-[80vh] py-4 sm:px-0 px-8'>
          {data.map(({ id, url, icon, description }) => (
            <>
              <Link
                href={url}
                target='_blank'
                key={id}
                title={`ir para ${description}`}
                className="sm:w-[18rem] w-full sm:h-[24rem]  bg-gradient-to-br from-black via-zinc-900 to-black rounded-md cursor-pointer flex flex-col justify-items-start items-center pt-20 pb-[100px] gap-8">
                <div className='z-20 w-12 h-12 bg-slate-700 flex items-center justify-center rounded-full p-3'>
                  {icon}
                </div>
                <span className='absolute w-px h-1/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent' />
                <h3 className="lg:text-xl font-medium duration-150 sm:text-2xl text-zinc-200 group-hover:text-white font-display z-20">@{description}</h3>
                <p className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 z-20">{description}</p>
              </Link>
            </>
          ))}
        </div>
    </>
  )
}
