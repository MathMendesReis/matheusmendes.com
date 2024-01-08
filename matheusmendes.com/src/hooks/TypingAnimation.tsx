'use client'
import Text from '@/components/typography/components/text'
import React, { useEffect, useState } from 'react'
interface TypingAnimationProps {
  text: string
  speed: number
}
export default function TypingAnimation({ text, speed }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState<string>(`${text[0]}`)

  useEffect(() => {
    let index = 1
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index))
        index++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <Text size="6xl" className="bgTextColor animate-fade-in">
      {displayText}
    </Text>
  )
}
