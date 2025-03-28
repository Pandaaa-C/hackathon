"use client";

import { cn } from "@/lib/utils";
import RoomLeaderboard from "./room-leaderboard";
import RoomClock from "./room-clock";
import { useState } from "react";
import RoomIpAddress from "./room-ip-address";
import RoomFlagsFound from "./room-flags-found";
import RoomFlagSubmit from "./room-flag-submit-form";
import RoomName from "./room-name";
import RoomDifficulty from "./room-difficulty";

export default function RoomBody() {
  const date = new Date();
  date.setDate(new Date().getDate() + 1);

  const [roomData, setRoomDate] = useState<{ id: number, name: string, difficulty: string, endDate: Date, ip: string }>({
    id: 1,
    name: "Infrastructure",
    difficulty: "Easy",
    endDate: date,
    ip: "127.0.0.1"
  });

  const [playerData, setPlayerData] = useState<{ name: string, flags: number }>({
    name: "Liam",
    flags: 12
  });


  return (
    <main className={cn("w-full h-[850px] p-2 flex")}>
      <div className={cn("w-[20%] h-[90%] p-2")}>
        <RoomLeaderboard />
      </div>
      <div className={cn("w-[15%] h-full p-2 flex flex-col gap-2")}>
        <RoomName roomName={roomData.name} />
        <RoomDifficulty difficulty={roomData.difficulty} />
        <RoomIpAddress ipAddress={roomData.ip} />
        <RoomClock roomFinish={roomData.endDate} />
      </div>
      <div className={cn("w-[15%] h-full p-2 flex flex-col gap-2")}>
        <RoomFlagsFound flags={playerData.flags} />
        <RoomFlagSubmit roomId={roomData.id} />
      </div>
    </main>
  )
}