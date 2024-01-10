import Box from '@/components/page/box'
import Text from '@/components/typography/components/text'
import TypingAnimation from '@/hooks/TypingAnimation'
import Image from 'next/image'
import React from 'react'

export default function HomeComponent() {
  return (
    <Box>
      <div
        id="#home"
        className="flex flex-wrap items-center justify-between w-full"
      >
        <section className="max-h-[609px] mx-auto w-full sm:w-[592px] flex items-center sm:items-start  flex-col sm:justify-center justify-start">
          <TypingAnimation text="Maatheus Mendes" speed={280} />
          <div className="w-full ">
            <Text size="2xl" as="p" className="animate-fade-in">
              Desenvolvedor Full stack
            </Text>
            <Text
              size="lg"
              as="p"
              className="animate-fade-in"
              color="text-neutral-300"
            >
              Desenvolvedor full stack especializado em tecnologias como React,
              Next.js, Tailwind, Styled Components, Spring e Node.js. Graduado
              em Análise e Desenvolvimento de Sistemas, estou ansioso para
              contribuir para projetos desafiadores, continuando a aprender e
              crescer profissionalmente.
            </Text>
          </div>
        </section>
        <figure className="h-[609px] w-[592px] flex items-center justify-center mx-auto">
          <Image
            alt=""
            src="./programer.svg"
            width={488}
            height={417}
            quality={100}
            className="animate-fade-in"
          />
        </figure>
      </div>
    </Box>
  )
}
