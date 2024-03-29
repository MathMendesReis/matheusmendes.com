import React from 'react'

interface CustomMainBoxProps {
  children: React.ReactNode
}
export default function CustomMainBox({ children }: CustomMainBoxProps) {
  return (
    <main className="w-full xl:w-[1440px] min-h-screen mx-auto py-3 px-5 flex flex-col items-center justify-center">
      {children}
    </main>
  )
}
