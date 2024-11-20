"use client";

import { useEffect, useState } from "react";

interface TimeUnit {
  label: string;
  value: string;
}

export const CountdownTimer = () => {
  const targetDate = new Date("2025-11-30T00:00:00");

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    return Math.floor((targetDate.getTime() - now.getTime()) / 1000);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const timeUnits: TimeUnit[] = [
    { label: "Days", value: `${String(days).padStart(2, "0")} :` },
    { label: "Hours", value: `${String(hours).padStart(2, "0")} :` },
    { label: "Minutes", value: `${String(minutes).padStart(2, "0")} :` },
    { label: "Seconds", value: `${String(seconds).padStart(2, "0")}` },
  ];

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
  );
};
