import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function Root({ 
  children,
 
}: Props) {
  return (
    <div className={`flex w-full min-h-[12rem] rounded-md p-4 flex-col gap-1 hover:scale-105 ease-in-out transition hover:bg-zinc-950/60`}>
      {children}
    </div>
  )
}
