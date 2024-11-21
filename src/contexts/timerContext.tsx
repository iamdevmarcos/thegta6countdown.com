"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface TimeUnit {
  label: string;
  value: string;
}

interface TimerContextType {
  timeUnits: TimeUnit[];
}

interface TimerProviderProps {
  children: React.ReactNode;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

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

  const days = Math.floor(
    timeLeft / (HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)
  );
  const hours = Math.floor(
    (timeLeft % (HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)) /
      (MINUTES_IN_HOUR * SECONDS_IN_MINUTE)
  );
  const minutes = Math.floor(
    (timeLeft % (MINUTES_IN_HOUR * SECONDS_IN_MINUTE)) / SECONDS_IN_MINUTE
  );
  const seconds = timeLeft % SECONDS_IN_MINUTE;

  const timeUnits: TimeUnit[] = [
    { label: "Days", value: `${String(days).padStart(2, "0")} :` },
    { label: "Hours", value: `${String(hours).padStart(2, "0")} :` },
    { label: "Minutes", value: `${String(minutes).padStart(2, "0")} :` },
    { label: "Seconds", value: `${String(seconds).padStart(2, "0")}` },
  ];

  return (
    <TimerContext.Provider value={{ timeUnits }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("Iti's Dam, iu ar dédi");
  }

  return context;
};
