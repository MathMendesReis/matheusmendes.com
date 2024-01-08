import CustomMainBox from '@/components/page/CustomMainBox'
import AboutComponent from '@/feature/about'
import Header from '@/feature/header'
import React from 'react'

export default function Page() {
  return (
    <main>
      <Header />
      <CustomMainBox>
        <AboutComponent />
      </CustomMainBox>
    </main>
  )
}
