"use client";

import { cn } from "@/lib/utils";
import { Flag, LogIn, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
    const router = useRouter();

    return (
        <header className={cn("relative w-full h-[50px] bg-black flex items-center gap-2 p-2")}>
            <div className={cn("h-[25px] absolute right-2 flex flex-row gap-2")}>
                <p className="">Create room</p>
                <Plus onClick={() => router.push("/admin/create")}
                    className={cn("h-full hover:cursor-pointer")} />
            </div>
            <div className={cn("h-[25px] min-w-[25px] w-fit flex gap-2")}>
                <Flag></Flag>
                <p className={cn("font-bold")}>CTF - Hackathon</p>
            </div>
        </header>
    )
}