import { formatDate } from '@/utils/formatDate'
import React from 'react'

interface Props {
  created_at: string
}
export default function Time({ created_at }: Props) {
  return <time className="w-full h-6 text-zinc-400 text-base font-normal font-['Inter'] leading-normal">{formatDate(created_at)}</time>     
}
