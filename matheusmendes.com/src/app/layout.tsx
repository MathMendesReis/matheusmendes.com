import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'
import data from '@/service/metadata.json'

const inter = Inter({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter", 
})
const kalam = Kalam({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam", 
})

export const metadata: Metadata = {
  title: `${data.metadata.title}`,
  description: `${data.metadata.metadata}`,
  icons:'/favicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${kalam.variable} bg-black/95  `}>
      <body className=''>{children}</body>
    </html>
  )
}
