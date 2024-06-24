"use client";

import { cn } from "@/lib/utils";

export default function RoomFlagsFound({ flags }: { flags: number }) {
  return (
    <div className={cn("w-full h-[7%] flex justify-center items-center bg-black rounded")}>
      <p className={cn("text-lg")}>Flags found: <span className={cn("font-bold")}>{flags}</span></p>
    </div>
  );
}