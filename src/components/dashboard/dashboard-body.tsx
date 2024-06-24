"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import DashboardRoomItem from "./dashboard-room-item";
import IRoomInfo from "@/interfaces/room-info";
import RoomCodeInput from "../room/room-code-input-form";
import RoomJoinInput from "../room/room-join-input-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DashboardBody({ rooms }: { rooms: IRoomInfo[] }) {
    const router = useRouter();
    const [roomCodeVerify, setRoomCodeVerify] = useState<number>(-1);
    const [roomJoinRequest, setRoomJoinRequest] = useState<number>(-1);

    const handleRoomJoin = (id: number) => {
        const room = rooms.find(x => x.id === id);
        if (!room) return;

        room.open ? setRoomJoinRequest(id) : setRoomCodeVerify(id);
    };

    return (
        <main className={cn("w-full min-h-[500px] h-auto")}>
            {roomCodeVerify > -1 && <RoomCodeInput
                id={rooms[rooms.findIndex(x => x.id === roomCodeVerify)].id}
                name={rooms[rooms.findIndex(x => x.id === roomCodeVerify)].name}
                close={() => setRoomCodeVerify(-1)}
                callback={setRoomJoinRequest}
            />}

            {roomJoinRequest > -1 && <RoomJoinInput
                id={rooms[rooms.findIndex(x => x.id === roomJoinRequest)].id}
                name={rooms[rooms.findIndex(x => x.id === roomJoinRequest)].name}
                callback={() => {
                    setRoomJoinRequest(-1);
                    
                    setTimeout(() => {
                        toast.success("Successfully joined room!");
                        router.push('/room/1');
                    }, 200);
                }}
            />}

            <div className={cn("w-full h-[75px] flex justify-center items-center content-center")}>
                <p className={cn("font-bold text-4xl")}>Active rooms</p>
            </div>
            <div className={cn("w-full min-h-[425px] h-fit p-5 grid gap-4 md:grid-cols-5 sm:grid-cols-3")}>
                {
                    rooms.map((room: IRoomInfo) => {
                        return <DashboardRoomItem key={room.id} roomData={room} joinRoom={handleRoomJoin} />
                    })
                }

            </div>
        </main>
    )
}