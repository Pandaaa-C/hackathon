"use client";

import { cn } from "@/lib/utils";
import { Ban } from "lucide-react";

export default function Custom404({ message = "" }: { message: string }) {

  return (
    <div className={cn("w-screen h-screen flex justify-center items-center flex-col backdrop-blur bg-neutral-950 bg-opacity-80 gap-10")}>
      <Ban className={cn("w-52 h-52 text-red-700 animate-pulse")} />
      {message.length > 0 ? <p>{message}</p> : <p>The page <code className={cn("text-red-400")}>{window.location.pathname}</code> doesn't exist!</p>}
    </div>
  )
}