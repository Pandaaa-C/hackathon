"use client";

import { cn } from "@/lib/utils";

export default function RoomDifficulty({ difficulty }: { difficulty: string }) {
  return (
    <div className={cn("w-full h-[7%] flex justify-center items-center bg-black rounded")}>
      <p className={cn("text-lg")}>Difficulty: <span className={cn("font-bold")}>{difficulty}</span></p>
    </div>
  );
}