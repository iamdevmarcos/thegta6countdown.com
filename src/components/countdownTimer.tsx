"use client";

import { useTimer } from "@/contexts/timerContext";

export const CountdownTimer = () => {
  const { timeUnits } = useTimer();

  return (
    <div className="flex justify-center items-center space-x-8 pb-6">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-start">
          <span className="text-[14px] font-semibold bg-secondary-gradient bg-clip-text text-transparent font-poppins tracking-tightest">
            {label}
          </span>
          <p className="leading-[80%] text-[80px] font-pricedown bg-secondary-gradient bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};
