import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter", 
})

export const metadata: Metadata = {
  title: 'Matheus Mendes',
  description: '',
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
