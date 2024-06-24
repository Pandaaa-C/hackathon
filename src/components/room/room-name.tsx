"use client";

import { cn } from "@/lib/utils";

export default function RoomName({ roomName }: { roomName: string }) {
  return (
    <div className={cn("w-full h-[7%] flex justify-center items-center bg-black rounded")}>
      <p className={cn("text-lg")}>Active room: <span className={cn("font-bold")}>{roomName}</span></p>
    </div>
  );
}