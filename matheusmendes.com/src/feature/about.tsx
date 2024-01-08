import Box from '@/components/page/box'
import Text from '@/components/typography/components/text'
import Image from 'next/image'
import React from 'react'

export default function AboutComponent() {
  return (
    <div id="about">
      <Box>
        <figure className="h-[609px] w-[592px] flex items-center justify-center">
          <Image
            alt=""
            src="./bro.svg"
            width={488}
            height={417}
            quality={100}
          />
        </figure>
        <section className="h-[609px] w-[592px] flex items-start  flex-col justify-center">
          <Text size="sm" as="p" color="text-green-300">
            About me
          </Text>
          <Text size="2xl" as="p">
            I’m a passionate software developer looking for my first
            international oppotunity
          </Text>
          <Text size="lg" as="p" className="" color="text-neutral-300">
            Beyond coding, I'm a coffee enthusiast, a cat lover, and a
            self-taught artist who enjoys spending my free time doodling. I am
            currently seeking opportunities to bring my skills and enthusiasm to
            a tech company in the United States or Europe and am excited about
            the prospect of relocating to pursue new challenges.
          </Text>
        </section>
      </Box>
    </div>
  )
}
