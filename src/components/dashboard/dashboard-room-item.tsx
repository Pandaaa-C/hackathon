"use client";

import IRoomInfo from "@/interfaces/room-info";
import { cn } from "@/lib/utils";

export default function DashboardRoomItem({roomData, joinRoom}: {roomData: IRoomInfo, joinRoom: (id: number) => void}) {
  return (
    <div className={cn("w-[265px] h-[175px] bg-black rounded p-2 flex flex-col")}>
      <div className={cn("w-full h-[15%] flex justify-center items-center")}>
        <p className={cn("text-lg font-bold")}>{roomData.name}</p>
      </div>
      <div className={cn("w-full h-[70%] flex justify-center flex-col")}>
        <p className={cn("text-sm")}><span className={cn("font-bold")}>Topic:</span> {roomData.topic}</p>
        <p className={cn("text-sm")}><span className={cn("font-bold")}>Difficulty:</span> {roomData.difficulty}</p>
        <p className={cn("text-sm")}><span className={cn("font-bold")}>Players:</span> {roomData.currentPlayers}/{roomData.maxPlayers}</p>
        <p className={cn("text-sm")}><span className={cn("font-bold")}>Private:</span> {roomData.open ? "No": "Yes"}</p>
      </div>
      <div className={cn("w-full h-[15%] flex justify-center items-center")}>
        <button onClick={() => joinRoom(roomData.id)} className={cn("w-[100px] h-[90%] rounded bg-green-700 text-sm font-bold hover:bg-green-900 transition-colors disabled:cursor-not-allowed disabled:bg-gray-700")} disabled={roomData.currentPlayers >= roomData.maxPlayers}>Join room</button>
      </div>
    </div>
  )
}