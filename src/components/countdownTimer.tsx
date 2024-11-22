'use client'

import { useTimer } from '@/contexts/timerContext'

export const CountdownTimer = () => {
  const { timeUnits } = useTimer()

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0 pb-6 px-12 sm:px-4">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center sm:items-start">
          <span className="text-[14px] font-semibold bg-secondary-gradient bg-clip-text text-transparent font-poppins tracking-tightest">
            {label}
          </span>
          <p className="leading-[80%] text-[60px] sm:text-[80px] font-pricedown bg-secondary-gradient bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}
