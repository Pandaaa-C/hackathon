"use client";

import acceptUserToRoomForm from "@/app/admin/room/[id]/(form)/acceptUserToRoom";
import removeUserFromRoomForm from "@/app/admin/room/[id]/(form)/removeUserFromRoomForm";
import { IAdminRoom, IRoomUser } from "@/interfaces/room-info";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AdminRoomClock from "./admin-room-clock";

export default function AdminRoomBody({ finishDate, room, players, session }: { finishDate: Date, room: IAdminRoom, players: IRoomUser[], session: any }) {
  const router = useRouter();

  const acceptUserToRoom = async (user: IRoomUser) => {
    const result = await acceptUserToRoomForm(room.id, user);
    result ? toast.success("Successfully acccepted user to room") : toast.error("Error while accepting user to room");

    router.refresh();
  };

  const removeUserFromRoom = async (user: IRoomUser) => {
    const result = await removeUserFromRoomForm(room.id, user);
    result ? toast.success("Successfully removed user from room") : toast.error("Error while removing user from room");

    router.refresh();
  };

  return (
    <main className={cn("w-full h-[850px] flex flex-col")}>
      <div className={cn("w-full h-[10%] flex gap-4 flex-row")}> {/* Room Information */}
        <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Room name: <span className={cn("text-base font-bold")}>{room.name}</span></p>
        </div>
        <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Topic: <span className={cn("text-base font-bold")}>{room.topic}</span></p>
        </div>
        <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Difficulty: <span className={cn("text-base font-bold")}>{room.difficulty}</span></p>
        </div>
        <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Max Players: <span className={cn("text-base font-bold")}>{room.maxPlayers}</span></p>
        </div>
        <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
          <p className={cn("text-lg")}>Play Time: <span className={cn("text-base font-bold")}>{room.playTime}</span></p>
        </div>
        {
          room.private ? (
            <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
              <p className={cn("text-lg")}>Room Code: <span className={cn("text-base font-bold")}>{room.code}</span></p>
            </div>
          ) : (
            <div className={cn("w-[15%] h-[90%] bg-black m-2 rounded inline-flex justify-center items-center")}>
              <p className={cn("text-lg")}><span className={cn("text-base font-bold")}>Room is public</span></p>
            </div>
          )
        }
      </div>
      <div className={cn("w-full h-[10%] p-4 flex justify-center items-center")}>
        <AdminRoomClock roomFinish={finishDate} />
      </div>
      <div className={cn("w-full h-[7.5%] p-4 flex justify-center items-center")}>
        <p className={cn("font-bold text-3xl")}>Waiting players</p>
      </div>
      <div className={cn("w-full h-[15%] flex justify-center items-center")}>
        <div className={cn("w-full h-full p-3 grid gap-4 md:grid-cols-5 sm:grid-cols-3")}>
          {players.filter(x => !x.accepted).map((player, index) => {
            return (
              <div key={index} onClick={() => acceptUserToRoom(player)} className={cn("w-[60%] h-[40%] rounded flex flex-col bg-black justify-center items-center hover:cursor-pointer hover:bg-gray-800")}>
                <p className={cn("text-base font-bold")}>{player.name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={cn("w-full h-[7.5%] p-4 flex justify-center items-center")}>
        <p className={cn("font-bold text-3xl")}>Current Players</p>
      </div>
      <div className={cn("w-full h-[60%]")}> {/* Playerlist */}
        <div className={cn("w-full h-full p-3 grid gap-4 md:grid-cols-5 sm:grid-cols-3")}>
          {players.filter(x => x.accepted).map((player, index) => {
            return (
              <div key={index} onClick={() => removeUserFromRoom(player)} className={cn("w-[75%] h-[10%] rounded flex flex-col bg-black justify-center items-center hover:cursor-pointer hover:bg-gray-800")}>
                <p className={cn("text-base font-bold")}>{player.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
