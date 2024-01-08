import React from 'react'

interface CustomBox {
  children: React.ReactNode
}
export default function Box({ children }: CustomBox) {
  return (
    <section className="w-full flex items-center justify-between min-h-[600px] sm:flex-nowrap flex-wrap">
      {children}
    </section>
  )
}
