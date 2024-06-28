"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminBody() {
  const router = useRouter();

  return (
    <main className={cn("w-screen h-screen flex justify-center items-center gap-4 flex-row")}>
      <div onClick={() => router.push('/admin/create')} className={cn("w-[10%] h-[20%] bg-black rounded-2xl flex justify-center items-center flex-col gap-3 hover:cursor-pointer hover:scale-110 transition-all active:scale-90")}>
        <p className={cn("font-bold text-lg md:text-lg")}>Create room</p>
        <Plus />
      </div>
    </main>
  )
}