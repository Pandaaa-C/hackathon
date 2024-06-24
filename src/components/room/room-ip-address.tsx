"use client";

import { cn } from "@/lib/utils";

export default function RoomIpAddress({ ipAddress }: { ipAddress: string }) {
  return (
    <div className={cn("w-full h-[7%] flex justify-center items-center bg-black rounded")}>
      <p className={cn("text-lg")}>Host: <span className={cn("font-bold")}>{ipAddress}</span></p>
    </div>
  );
}