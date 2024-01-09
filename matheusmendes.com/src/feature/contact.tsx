import Text from '@/components/typography/components/text'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contatc() {
  return (
    <BackgroundBox>
      <section id="contact" className="w-full sm:w-[600px] flex flex-col">
        <section className="w-full sm:w-[600px] sm:h-40 flex flex-col" />
        <Card />
        <SocialMedia />
      </section>
      <Form />
    </BackgroundBox>
  )
}

function Card() {
  return (
    <section className="w-full flex flex-col items-start justify-center">
      <div className="w-full sm:w-[600px] sm:h-[184px] flex flex-col gap-4">
        <Text as="p" size="md" color="text-green-300" className="apearReverse">
          Contatos
        </Text>
        <Text as="p" size="2xl" color="text-green-300" className="apearReverse">
          Gostou do meu trabalho? Vamos trabalhar juntos
        </Text>
        <Text as="p" size="lg" color="text-green-300" className="apearReverse">
          Estou sempre pronto para bater um papo. Envie-me um e-mail para
          matheusmendesreiss@gmail.com ou ligue para mim nas redes sociais.
        </Text>
      </div>
    </section>
  )
}

function BackgroundBox({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-zinc-900 w-full flex px-10 rounded-lg py-6 items-start justify-between flex-wrap sm:h-auto h-screen">
      {children}
    </section>
  )
}
function Form() {
  return (
    <section className="flex flex-col items-start justify-center w-full sm:w-[488px] sm:h-[376px]"></section>
  )
}

function SocialMedia() {
  return (
    <ul className="w-40 h-12 rounded-lg flex gap-2">
      <li className="bg-zinc-800 p-3 h-12 w-12 rounded-md">
        <Link href="https://github.com/MathMendesReis" target="_blank">
          <Github />
        </Link>
      </li>
      <li className="bg-zinc-800 p-3 h-12 w-12 rounded-md">
        <Link
          href="https://www.linkedin.com/in/mathmendesreis/"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </li>
      <li className="bg-zinc-800 p-3 h-12 w-12 rounded-md">
        <Link
          href="https://www.instagram.com/matheusmendesreis/"
          target="_blank"
        >
          <Instagram />
        </Link>
      </li>
    </ul>
  )
}
