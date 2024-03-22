import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'
import Header from '@/feature/header'
import Particles from '@/components/particules/particules'
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
})
const kalam = Kalam({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kalam',
})

export const metadata: Metadata = {
  icons: '/favicon.png',
  title: 'Matheus Mendes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${kalam.variable} bg-black/95  `}
    >
      <body className="">
        <Particles
          className="absolute animate-fade-in h-full w-svw"
          quantity={100}
        />
        <Header />
        {children}
      </body>
    </html>
  )
}
