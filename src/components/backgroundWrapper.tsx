'use client'

import { ReactNode, useEffect, useState } from 'react'

const backgrounds = [
  'background1',
  'background2',
  'background3',
  'background4',
  'background5',
  'background6',
]

interface BackgroundWrapperProps {
  children: ReactNode
}

export function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  const [currentBg, setCurrentBg] = useState('background1')

  useEffect(() => {
    const interval = setInterval(() => {
      const newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
      setCurrentBg(newBg)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`bg-${currentBg} bg-cover bg-center bg-no-repeat h-screen flex-col flex items-center justify-center transition-all duration-1000 ease-linear`}
    >
      {children}
    </div>
  )
}
