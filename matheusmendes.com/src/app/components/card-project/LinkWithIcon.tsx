import Link from 'next/link'
import React, { ElementType } from 'react'

interface Props {
  url: string
  children:ElementType
}
export default function LinkWithIcon({ url,children }: Props) {
  const Element= children
  return (
  
        <Link href={url ? url : ''} target='_blank'>
          <Element size={18} color='white'/>
        </Link>
  
  )
}
