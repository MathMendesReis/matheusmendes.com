import Link from "next/link";
import data from '@/service/home.json'
import Particles from "../components/particles";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
     <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <nav className="w-[8.625rem] h-[5.25rem]  pt-3">
        <ul className="flex gap-4 justify-center">
          {data.links.map((item,i)=>(
            <Link key={i} href={item.href} className=" w-[4.8125rem] h-[1.0625rem] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight" title={`ir para ${item.text}`}>{item.text}</Link>
          ))}
        </ul>
      </nav>
      <main className="">
        <h1 className="  w-full sm:w-[35rem] h-[7.4375rem] sm:text-9xl text-4xl font-bold font-['Inter'] leading-[94.72px] tracking-[4.85px] text-center" title={`Olá, sou o Matheus`}>{data.mainText.content}</h1>
      </main>
      <footer className="h-[5.25rem] flex sm:items-center justify-center">
        <p className="w-full  h-[1.0625rem] text-center text-zinc-500 sm:text-lg font-normal font-['Inter'] leading-tight">{data.footerText.content}</p>
      </footer>
    </div>
  )
}

