import React from 'react'

type Width = 'lg:w-[32rem]'|'sm:w-[18rem]'|'flex-1'|'lg:[22rem]'|''
type Heigth = 'h-[12rem]'|'h-[26rem]'
type Flex = 'flex-1'|''
interface Props {
  children: React.ReactNode
  width?:Width
  heigth?:Heigth
  flex?:Flex
}
export default function Root({ 
  children,
  width='sm:w-[18rem]',
  heigth='h-[12rem]',
  flex=''
}: Props) {
  const style = `${flex} ${width} w-full ${heigth} bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-md p-4 flex flex-col gap-1`
  return (
    <div className={style}>
      {children}
    </div>
  )
}
