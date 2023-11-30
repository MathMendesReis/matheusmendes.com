import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import data from '@/service/metadata.json'

const inter = Inter({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter", 
})

export const metadata: Metadata = {
  title: `${data.metadata.title}`,
  description: `${data.metadata.metadata}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} bg-black/95  `}>
      <body className=''>{children}</body>
    </html>
  )
}
