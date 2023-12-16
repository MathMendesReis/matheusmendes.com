import Image from 'next/image'
import React from 'react'

interface AvatarImagensProps {
  url:string
  alt?:string
}
export default function AvatarImage({url}:AvatarImagensProps) {
  return <Image src={url} alt='' width={50} height={50} objectFit='cover'/>
}
