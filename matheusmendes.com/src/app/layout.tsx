import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'
import data from '@/service/metadata.json'
import LinkNavHeader from '@/components/Link-nav/LinkNavHeader'
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
  title: `${data.metadata.title}`,
  description: `${data.metadata.metadata}`,
  icons: '/favicon.png',
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
        <div className="w-full shadow- bottom-0 py-3 px-5">
          <header className="max-w-[1440px] fixed top-0 right-[12%]  h-20 flex items-center justify-between">
            <section>
              <h1 className="">MatheusMendes</h1>
            </section>
            <nav className="flex gap-8">
              <LinkNavHeader />
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  )
}
