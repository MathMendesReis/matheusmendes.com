import Box from '@/components/page/box'
import Text from '@/components/typography/components/text'
import Image from 'next/image'
import React from 'react'

export default function AboutComponent() {
  return (
    <Box id="about">
      <div className="min-h-[600px] bg-zinc-900 rounded-md flex flex-wrap">
        <figure className="w-full mx-auto sm:w-[592px] flex items-center justify-center reval">
          <Image
            alt=""
            src="./bro.svg"
            width={488}
            height={417}
            quality={100}
          />
        </figure>
        <section className="px-3 w-full sm:w-[592px] flex items-start  flex-col justify-center lg:mr-6">
          <Text size="sm" as="p" color="text-green-300" className="apear">
            About me
          </Text>
          <Text size="4xl" as="p" className="apear sm:text-4xl text-lg">
            Sou um desenvolvedor de software apaixonado em busca de minha
            primeira oportunidade profissional.
          </Text>
          <Text size="lg" as="p" className="apear" color="text-neutral-300">
            Além da programação, sou um entusiasta do café, um amante de
            cachorros e um jogador de xadrez habilidoso. Atualmente, estou em
            busca de oportunidades para trazer minhas habilidades e entusiasmo
            para uma empresa de tecnologia.
          </Text>
        </section>
      </div>
    </Box>
  )
}
