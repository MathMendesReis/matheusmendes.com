import React from 'react'

interface Props {
  name: string
}
export default function Title({name }: Props) {
  return <h2 className=" w-full min-h-15 text-zinc-100 sm:text-2xl font-bold font-mono py-3 leading-10">{name}</h2>
}
