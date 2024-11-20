'use client'

interface TimeUnit {
  label: string
  value: string
}

export const CountdownTimer = () => {
  const timeUnits: TimeUnit[] = [
    { label: 'Days', value: '08 :' },
    { label: 'Hours', value: '12 :' },
    { label: 'Minutes', value: '44 :' },
    { label: 'Seconds', value: '28' },
  ]

  return (
    <div className="flex justify-center items-center space-x-8 pb-6">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-start">
          <span className="text-[14px] font-semibold bg-secondary-gradient bg-clip-text text-transparent">
            {label}
          </span>
          <p className="leading-[80%] text-[80px] font-pricedown bg-secondary-gradient bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}
