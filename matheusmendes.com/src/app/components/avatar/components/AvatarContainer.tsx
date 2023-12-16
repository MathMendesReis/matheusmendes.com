import React from 'react'

interface AvatarContainerProps{
  children:React.ReactNode
}
export default function AvatarContainer({children}:AvatarContainerProps) {
  return (
    <section className='w-full sm:w-[640px] flex gap-2 items-center justify-start flex-wrap'>
      {children}
    </section> 
  )
}
 