import React from 'react'

interface CustomMainBoxProps {
  children: React.ReactNode
}
export default function CustomMainBox({ children }: CustomMainBoxProps) {
  return (
    <main className="max-w-[1440px] min-h-screen mx-auto py-3 px-1">
      {children}
    </main>
  )
}
