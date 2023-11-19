import Link from "next/link";
import data from '@/service/home.json'
import Particles from "../components/particles";




export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
       <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <nav className="w-[122.41px] h-[148px] ">
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href={data.links[0].href} className=" w-[4.8125rem] h-[1.0625rem] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight" title={`ir para ${data.links[0].text}`}>{data.links[0].text}</Link>
          </li>
          <li>
            <Link href={data.links[1].href} className=" w-[4.8125rem] h-[1.0625rem] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight" title={`ir para ${data.links[1].text}`}>{data.links[1].text}</Link>
          </li>
        </ul>
      </nav>
      <main className="">
        <p className="w-full sm:w-[35rem] h-[7.4375rem] sm:text-9xl text-8xl font-normal font-['Inter'] leading-[94.72px] tracking-[4.85px] text-center	" title={`Olá, sou o Matheus`}>{data.mainText.content}</p>
      </main>
      <footer>
        <p className="w-full h-[17px] text-center text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">{data.footerText.content}</p>
      </footer>
    </div>
  )
}

