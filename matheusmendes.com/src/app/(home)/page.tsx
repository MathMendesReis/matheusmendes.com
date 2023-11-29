import Link from "next/link";
import data from '@/service/home.json'
import Particles from "../components/particles";
export default function Home() {
  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <div className="flex flex-col justify-center items-center  animate-wiggle">
          <nav className="w-[8.625rem] h-[5.25rem]  pt-3">
            <ul className="flex gap-4 justify-center animate-fade-in">
              {data.links.map((item, i) => (
                <Link key={i} href={item.href} className=" w-[4.8125rem] h-[1.0625rem] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight" title={`ir para ${item.text}`}>{item.text}</Link>
              ))}
            </ul>
          </nav>
          <main className="">
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              {data.mainText.content}
            </h1>
          </main>
          <footer className="h-[5.25rem] flex sm:items-center justify-center animate-fade-in">
            <p className="w-full  h-[1.0625rem] text-center text-zinc-500 sm:text-lg font-normal font-['Inter'] leading-tight">{data.footerText.content}</p>
          </footer>
        </div>
      </div>
    </>
  )
}

