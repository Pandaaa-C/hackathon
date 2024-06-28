"use client";

import IRoomInfo from "@/interfaces/room-info";
import { cn } from "@/lib/utils";

export default function DashboardRoomItem({roomData, joinRoom}: {roomData: IRoomInfo, joinRoom: (id: number) => void}) {
  return (
    <div className={cn("w-[98%] h-[100%] bg-black rounded p-2 flex flex-col")}>
      <div className={cn("w-full h-[10%] flex justify-center items-center")}>
        <p className={cn("md:text-2xl sm:text-lg font-bold")}>{roomData.name}</p>
      </div>
      <div className={cn("w-full h-[70%] flex justify-center flex-col")}>
        <p className={cn("md:text-base sm:text-sm")}><span className={cn("font-bold")}>Topic:</span> {roomData.topic}</p>
        <p className={cn("md:text-base sm:text-sm")}><span className={cn("font-bold")}>Difficulty:</span> {roomData.difficulty}</p>
        <p className={cn("md:text-base sm:text-sm")}><span className={cn("font-bold")}>Players:</span> {roomData.currentPlayers}/{roomData.maxPlayers}</p>
        <p className={cn("md:text-base sm:text-sm")}><span className={cn("font-bold")}>Private:</span> {roomData.open ? "No": "Yes"}</p>
      </div>
      <div className={cn("w-full h-[20%] flex justify-center items-center")}>
        <button onClick={() => joinRoom(roomData.id)} className={cn("w-[100px] h-[100%] rounded sm:text-sm bg-green-700 text-base font-bold hover:bg-green-900 transition-colors disabled:cursor-not-allowed disabled:bg-gray-700 inline-flex justify-center items-center")} disabled={roomData.currentPlayers >= roomData.maxPlayers}>Join room</button>
      </div>
    </div>
  )
}