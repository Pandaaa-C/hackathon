"use client";

import { cn } from "@/lib/utils";
import { Flag, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminRoomHeader() {
  const router = useRouter();

  return (
    <header className={cn("relative w-full h-[50px] bg-black flex items-center gap-2 p-2")}>
      <div className={cn("h-[25px] w-[25px] absolute right-2")}>
        <LogOut onClick={() => router.push("/login")}
          className={cn("h-full w-full hover:cursor-pointer")} />
      </div>
      <div className={cn("h-[25px] min-w-[25px] w-fit flex gap-2")}>
        <Flag />
        <p className={cn("font-bold")}>CTF - Hackathon</p>
      </div>
    </header>
  )
}