import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const hackathonDate = new Date('2025-04-12T17:00:00-05:00').getTime();
    const now = new Date().getTime();
    const difference = Math.max(0, hackathonDate - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-lg p-2 sm:p-4 min-w-[80px] sm:min-w-[100px]">
      <span className="text-xl sm:text-3xl font-bold">{value < 10 ? `0${value}` : value}</span>
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
  );
}
