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
  const [currentBg, setCurrentBg] = useState('background2')
  const twentySeconds = 20000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => {
        let newBg
        do {
          newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
        } while (newBg === prev)
        return newBg
      })
    }, twentySeconds)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`bg-${currentBg} bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-between transition-background duration-1000 ease-linear gap-8`}
    >
      {children}
    </div>
  )
}
