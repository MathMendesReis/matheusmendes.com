import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <nav className="w-[122.41px] h-[148px] ">
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href="/projetos" className="w-[77px] h-[17px] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">Projetos</Link>
          </li>
          <li>
            <Link href="/contatos" className="w-[77px] h-[17px] text-zinc-500 text-lg font-normal font-['Inter'] leading-tight" >contatos</Link>
          </li>
        </ul>
      </nav>
      <main className="">
        <p className=" w-[560.11px] h-[119px] text-[126.25px] font-normal font-['Inter'] leading-[94.72px] tracking-[4.85px] text-center	">matheus</p>
      </main>
      <footer>
      <p className="w-full h-[17px] text-center text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">Olá, eu sou o Matheus, eu construo sites</p>
      </footer>
    </div>
  )
}

