import React from 'react'

interface Props {
  description: string
}
export default function Description({description }: Props) {
  return <p className="w-full h-12 line-clamp-5 text-zinc-400 text-base font-normal font-['Inter'] leading-normal shrink-0">{description}</p>
}
