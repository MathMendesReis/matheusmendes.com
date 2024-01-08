import LinkNavHeader from '@/components/Link-nav/LinkNavHeader'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full shadow- bottom-0 py-3 px-5">
      <header className="w-[1440px] bg-red-800 fixed bottom-0  h-20 flex items-center justify-between mx-auto">
        <section>
          <h1 className="">MatheusMendes</h1>
        </section>
        <nav className="flex gap-8">
          <LinkNavHeader />
        </nav>
      </header>
    </div>
  )
}
