"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import DashboardRoomItem from "./dashboard-room-item";
import IRoomInfo from "@/interfaces/room-info";
import RoomCodeInput from "../room/room-code-input-form";

export default function DashboardBody() {
    const [requestRoom, setRequestRoom] = useState<{ id: number, name: string } | null>();
    const closeRoomRequest = () => {
        setRequestRoom(null);
    };

    const joinRoom = (id: number, name: string) => {
        setRequestRoom({ id: id, name: name });
    };

    const [rooms, setRooms] = useState<IRoomInfo[]>([
        { id: 0, name: "Room 1", topic: "Web", difficulty: "Easy", currentPlayers: 0, maxPlayers: 5, open: false },
        { id: 1, name: "Room 2", topic: "Web", difficulty: "Hard", currentPlayers: 15, maxPlayers: 15, open: true },
        { id: 2, name: "Room 3", topic: "Web", difficulty: "Medium", currentPlayers: 4, maxPlayers: 10, open: false },
        { id: 3, name: "Room 4", topic: "Infrastructure", difficulty: "Easy", currentPlayers: 2, maxPlayers: 5, open: true },
        { id: 4, name: "Room 5", topic: "Infrastructure", difficulty: "Medium", currentPlayers: 6, maxPlayers: 10, open: false },
        { id: 5, name: "Room 6", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
    ]);

    return (
        <main className={cn("w-full h-[500px]")}>
            {requestRoom != null ? <RoomCodeInput id={requestRoom.id} name={requestRoom.name} key={requestRoom.id} close={closeRoomRequest} /> : <></>}
            <div className={cn("w-full h-[75px] flex justify-center items-center content-center")}>
                <p className={cn("font-bold text-3xl")}>Active rooms</p>
            </div>
            <div className={cn("w-full h-[425px] p-4 grid gap-1 grid-cols-5")}>
                {
                    rooms.map((room: IRoomInfo) => {
                        return <DashboardRoomItem key={room.id} roomData={room} joinRoom={joinRoom} />
                    })
                }

            </div>
        </main>
    )
}