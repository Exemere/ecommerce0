"use client";

import { useEffect, useState } from "react";

export default function FlashSaleTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const resetHours = 3;

    // Try to get saved target from localStorage
    const savedTarget = localStorage.getItem("flashSaleEndTime");
    let target: Date;

    if (savedTarget && new Date(savedTarget).getTime() > Date.now()) {
      // Use saved time if still valid
      target = new Date(savedTarget);
    } else {
      // Otherwise, set a new target time (3 hours from now)
      target = new Date();
      target.setHours(target.getHours() + resetHours);
      localStorage.setItem("flashSaleEndTime", target.toISOString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        // When time runs out, reset 3 hours again
        target = new Date();
        target.setHours(target.getHours() + resetHours);
        localStorage.setItem("flashSaleEndTime", target.toISOString());
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 text-sm md:text-base text-gray-700 font-medium bg-red-100 px-3 py-1 rounded-full">
      <span className="font-semibold text-red-600">Ends in:</span>
      <span className="font-mono">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </span>
    </div>
  );
}

