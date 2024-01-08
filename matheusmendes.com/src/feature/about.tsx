import Box from '@/components/page/box'
import Text from '@/components/typography/components/text'
import Image from 'next/image'
import React from 'react'

export default function AboutComponent() {
  return (
    <div id="#about">
      <Box>
        <section className="h-[609px] w-[592px] flex items-start  flex-col justify-center bg-red-600">
          <Text size="5xl" as="p" className="bgTextColor ">
            Matheus Mendes
          </Text>
          <Text size="2xl" as="p">
            Full-stack developer and innovation enthusiast
          </Text>
          <Text size="lg" as="p" className="" color="text-neutral-300">
            Over 4 years of experience in the tech industry. I specialize in
            building innovative web and mobile applications using technologies
            such as React, React Native, and Node.js.
          </Text>
        </section>
        <figure className="h-[609px] w-[592px] flex items-center justify-center">
          <Image
            alt=""
            src="./programer.svg"
            width={488}
            height={417}
            quality={100}
          />
        </figure>
      </Box>
    </div>
  )
}
