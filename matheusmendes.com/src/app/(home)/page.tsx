import CustomMainBox from '@/components/page/CustomMainBox'
import AboutComponent from '@/feature/about'
import HomeComponent from '@/feature/home'
import React from 'react'

export default function Page() {
  return (
    <>
      <CustomMainBox>
        <HomeComponent />
      </CustomMainBox>
      <CustomMainBox>
        <AboutComponent />
      </CustomMainBox>
    </>
  )
}
