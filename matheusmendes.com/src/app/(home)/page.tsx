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
        <div className="flex flex-col justify-center items-center ">
          <nav className="w-full sm:w-[20.625rem] h-[5.25rem]  pt-3 ">
            <ul className="w-full flex gap-4 justify-center animate-fade-in  ">
              {data.links.map((item, i) => {
                if (item.href !== '/') {
                  return (
                    <Link key={i} href={item.href} className=" min-w-[5.8125rem] min-h-[1.0625rem]"       title={`ir para ${item.text}`}>
                      <p className=" text-zinc-500 sm:text-lg font-normal font-['Inter'] leading-tight">{item.text}</p>
                    </Link>
                  )
                }
              })}
            </ul>
          </nav>
          <main className="">
            <h1 className="z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-8xl whitespace-nowrap bg-clip-text sm:text-9xl ">
              {data.mainText.content}
            </h1>
          </main>
          <footer className="h-[5.25rem] flex sm:items-center justify-center animate-fade-in mt-8">
            <p className="w-full  h-[1.0625rem] text-center text-zinc-500 sm:text-lg font-normal font-['Inter'] leading-tight">{data.footerText.content}</p>
          </footer>
        </div>
      </div>
    </>
  )
}

