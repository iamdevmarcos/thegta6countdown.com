'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { useScreenSize } from '@/hooks/useScreenSize'

interface TimeUnit {
  label: string
  value: string
}

interface TimerContextType {
  timeUnits: TimeUnit[]
}

interface TimerProviderProps {
  children: React.ReactNode
}

const TimerContext = createContext<TimerContextType | undefined>(undefined)

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const { isMobile, isTablet } = useScreenSize({})

  const SECONDS_IN_MINUTE = 60
  const MINUTES_IN_HOUR = 60
  const HOURS_IN_DAY = 24

  const targetDate = useMemo(() => new Date('2025-11-30T00:00:00'), [])

  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const computeTimeLeft = () => {
      const now = new Date()
      return Math.floor((targetDate.getTime() - now.getTime()) / 1000)
    }

    setTimeLeft(computeTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const days = Math.floor(
    timeLeft / (HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)
  )
  const hours = Math.floor(
    (timeLeft % (HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)) /
      (MINUTES_IN_HOUR * SECONDS_IN_MINUTE)
  )
  const minutes = Math.floor(
    (timeLeft % (MINUTES_IN_HOUR * SECONDS_IN_MINUTE)) / SECONDS_IN_MINUTE
  )
  const seconds = timeLeft % SECONDS_IN_MINUTE

  const timeUnits: TimeUnit[] = [
    {
      label: 'Days',
      value: `${String(days).padStart(2, '0')}${
        isMobile || isTablet ? '' : ' :'
      }`,
    },
    {
      label: 'Hours',
      value: `${String(hours).padStart(2, '0')}${
        isMobile || isTablet ? '' : ' :'
      }`,
    },
    {
      label: 'Minutes',
      value: `${String(minutes).padStart(2, '0')}${
        isMobile || isTablet ? '' : ' :'
      }`,
    },
    { label: 'Seconds', value: `${String(seconds).padStart(2, '0')}` },
  ]

  return (
    <TimerContext.Provider value={{ timeUnits }}>
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => {
  const context = useContext(TimerContext)
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider')
  }

  return context
}
