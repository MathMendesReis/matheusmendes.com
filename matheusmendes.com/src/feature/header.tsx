import LinkNavHeader from '@/components/Link-nav/LinkNavHeader'
import React from 'react'

export default function Header() {
  return (
    <header id="home" className="w-full shadow-3xl absolute top-0 py-3 px-5">
      <div className="w-[1440px] h-20 flex items-center justify-between mx-auto bg-red-800">
        <section>
          <h1 className="text-3xl">MatheusMendes</h1>
        </section>
        <nav className="flex gap-8">
          <LinkNavHeader />
        </nav>
      </div>
    </header>
  )
}
