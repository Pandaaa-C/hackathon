"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function AdminRoomClock({ roomFinish }: { roomFinish: Date }) {
  const [countdownTimer, setCountdownTimer] = useState<any>();
  const [timeLeft, setTimeLeft] = useState<string>("0d 0h 0m 0s");

  useEffect(() => {
    if (countdownTimer) return;

    const timer = setInterval(updateTimer, 1000);
    setCountdownTimer(timer);
  }, [countdownTimer]);

  function updateTimer() {
    const _date = new Date().getTime();
    const distance = roomFinish.getTime() - _date;
    if (distance < 0) {
      clearInterval(countdownTimer);
      setCountdownTimer(null);
      // TODO: present winner.
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    const result = `
      ${days > 0 ? days + "d" : ""} 
      ${hours > 0 ? hours + "h" : ""} 
      ${minutes > 0 ? minutes + "m" : ""} 
      ${seconds > 0 ? seconds + "s" : ""}
    `;
    setTimeLeft(result);
  }

  return (
    <div className={cn("w-[20%] h-[100%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Time remaining: <span className={cn("text-base font-bold")}>{timeLeft}</span></p>
        </div>
  );
}