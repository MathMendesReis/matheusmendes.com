import LinkNavHeader from '@/components/Link-nav/LinkNavHeader'
import Text from '@/components/typography/components/text'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full shadow-3xl fixed backdrop-blur-xl	animate-fade-in z-50">
      <header className="lg:w-[1440px] w-full  h-20 flex items-center justify-between mx-auto shadow- top-0 py-3 px-5">
        <section>
          <Text as="h1" size="sm" className="">
            MatheusMendes
          </Text>
        </section>
        <nav className="flex gap-8">
          <LinkNavHeader />
        </nav>
      </header>
    </div>
  )
}
