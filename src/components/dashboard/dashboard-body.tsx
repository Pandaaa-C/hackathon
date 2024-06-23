"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import DashboardRoomItem from "./dashboard-room-item";
import IRoomInfo from "@/interfaces/room-info";
import RoomCodeInput from "../room/room-code-input-form";
import RoomJoinInput from "../room/room-join-input-form";

export default function DashboardBody({rooms}: {rooms: IRoomInfo[]}) {
    const [roomCodeVerify, setRoomCodeVerify] = useState<number>(-1);
    const [roomJoinRequest, setRoomJoinRequest] = useState<number>(-1);

    const handleRoomJoin = (id: number) => {
        const room = rooms.find(x => x.id === id);
        if (!room) return;

        room.open ? setRoomJoinRequest(id) : setRoomCodeVerify(id);
    };

    return (
        <main className={cn("w-full h-[500px]")}>
            {roomCodeVerify > -1 && <RoomCodeInput
                id={rooms[rooms.findIndex(x => x.id === roomCodeVerify)].id}
                name={rooms[rooms.findIndex(x => x.id === roomCodeVerify)].name}
                close={() => setRoomCodeVerify(-1)}
                callback={setRoomJoinRequest}
            />}

            {roomJoinRequest > -1 && <RoomJoinInput
                id={rooms[rooms.findIndex(x => x.id === roomJoinRequest)].id}
                name={rooms[rooms.findIndex(x => x.id === roomJoinRequest)].name}
                callback={() => setRoomJoinRequest(-1)}
            />}

            <div className={cn("w-full h-[75px] flex justify-center items-center content-center")}>
                <p className={cn("font-bold text-3xl")}>Active rooms</p>
            </div>
            <div className={cn("w-full h-[425px] p-4 grid gap-1 grid-cols-5")}>
                {
                    rooms.map((room: IRoomInfo) => {
                        return <DashboardRoomItem key={room.id} roomData={room} joinRoom={handleRoomJoin} />
                    })
                }

            </div>
        </main>
    )
}