'use client'
import LinkNavHeader from '@/components/Link-nav/LinkNavHeader'
import ButtonModal from '@/components/modal/button'
import Modal from '@/components/modal/modal'
import Text from '@/components/typography/components/text'
import React from 'react'

export default function Header() {
  const { ButtonOpenOrClosedModal, openModal } = ButtonModal()
  return (
    <div className="w-full shadow-3xl lg:fixed backdrop-blur-xl	animate-fade-in z-50">
      <header className="lg:w-[1440px] min-h-20 flex items-center justify-between mx-auto shadow- top-0 py-3 px-5">
        <section>
          <Text as="h1" size="sm" className="">
            MatheusMendes
          </Text>
        </section>
        <nav className="hidden sm:flex gap-8 flex-1">
          <LinkNavHeader />
        </nav>
        {ButtonOpenOrClosedModal}
        {openModal && <Modal />}
      </header>
    </div>
  )
}
