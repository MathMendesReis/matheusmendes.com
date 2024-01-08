'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const pages = [
  { title: 'home', id: 1, path: '/#home' },
  { title: 'about', id: 2, path: '/#about' },
  { title: 'projects', id: 3, path: '/#projects' },
  { title: 'contact', id: 4, path: '/#contact' },
]

type CurrentPageState = (typeof pages)[number]['path']

const LinkNavHeader = () => {
  const pathname = usePathname()

  const [currentPage, setCurrentPage] = useState<CurrentPageState>(pathname)

  const handleSetCurrentPage = (currentPage: string) => {
    setCurrentPage(() => currentPage)
  }

  const listItems = pages.map(({ id, title, path }) => (
    <li key={id}>
      <Link href={path} onClick={() => handleSetCurrentPage(path)}>
        <p
          className={`text-lg capitalize  leading-7 ${
            currentPage === path ? 'font-extrabold' : 'font-medium'
          }`}
        >
          {title}
        </p>
      </Link>
    </li>
  ))

  return <ul className="flex gap-4 items-center">{listItems}</ul>
}

export default LinkNavHeader
