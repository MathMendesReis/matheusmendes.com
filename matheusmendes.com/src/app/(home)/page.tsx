import CustomMainBox from '@/components/page/CustomMainBox'
import AboutComponent from '@/feature/about'
import Contatc from '@/feature/contact'
import HomeComponent from '@/feature/home'
import Projects from '@/feature/projects'
import React from 'react'

export default function Page() {
  return (
    <main>
      <CustomMainBox>
        <HomeComponent />
      </CustomMainBox>
      <CustomMainBox>
        <AboutComponent />
      </CustomMainBox>
      <CustomMainBox>
        <Projects />
      </CustomMainBox>
      <CustomMainBox>
        <Contatc />
      </CustomMainBox>
    </main>
  )
}
