'use client'
import React from 'react'
import ListLinks from './listLinks'

const LinkNavHeader = () => {
  const { listItems } = ListLinks()
  return (
    <ul className="flex gap-4 items-center sm:flex-row flex-col">
      {listItems}
    </ul>
  )
}

export default LinkNavHeader
