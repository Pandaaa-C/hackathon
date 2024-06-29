"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminBody({ rooms }: { rooms: { id: number, name: string }[] }) {
  const router = useRouter();

  return (
    <main className={cn("w-full h-[800px] flex items-center gap-4 flex-col p-5")}>
      <p className={cn("font-bold text-3xl md:text-3xl")}>Your Rooms</p>
      <div className={cn("w-full h-[20%] p-2 grid gap-4 md:grid-cols-5 sm:grid-cols-3")}>
        {rooms.map(room => {
          return (
            <div key={1} onClick={() => router.push('/admin/room/' + room.id)} className={cn("w-[80%] h-[50%] bg-black rounded-xl flex justify-center items-center flex-col gap-3 hover:cursor-pointer hover:scale-110 transition-all active:scale-90")}>
              <p className={cn("font-bold text-lg md:text-lg")}>{room.name}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}