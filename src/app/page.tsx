'use client'
import { useState } from 'react'

const backgrounds = [
  'background1',
  'background2',
  'background3',
  'background4',
  'background5',
  'background6',
]

export default function Home() {
  const [currentBg, setCurrentBg] = useState('background1')

  setTimeout(() => {
    const newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    setCurrentBg(newBg)
  }, 2000)

  return (
    <div
      className={`bg-${currentBg} bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center transition-all duration-1000 ease-linear`}
    >
      <p>hello</p>
    </div>
  )
}
