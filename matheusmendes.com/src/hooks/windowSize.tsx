import React, { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

// Exemplo de uso do hook
const MyComponent = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      <p>Largura da tela: {width}px</p>
      <p>Altura da tela: {height}px</p>
    </div>
  )
}

export default MyComponent
