"use client";

import { cn } from "@/lib/utils";
import RoomLeaderboard from "./room-leaderboard";

export default function RoomBody() {
  return (
    <main className={cn("w-full h-[800px] p-2")}>
      <div className={cn("w-[450px] h-[100%] p-2")}>
        <RoomLeaderboard />
      </div>
    </main>
  )
}