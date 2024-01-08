import Box from '@/components/page/box'
import Text from '@/components/typography/components/text'
import TypingAnimation from '@/hooks/TypingAnimation'
import Image from 'next/image'
import React from 'react'

export default function HomeComponent() {
  return (
    <div id="#home">
      <Box>
        <section className="h-[609px] w-[592px] flex items-start  flex-col justify-center">
          <TypingAnimation text="Maatheus Mendes" speed={280} />
          <div className="w-full opacity-0 animate-title">
            <Text size="2xl" as="p">
              Full-stack developer and innovation enthusiast
            </Text>
            <Text size="lg" as="p" className="" color="text-neutral-300">
              Over 4 years of experience in the tech industry. I specialize in
              building innovative web and mobile applications using technologies
              such as React, React Native, and Node.js.
            </Text>
          </div>
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
