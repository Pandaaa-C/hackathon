"use server";

import { RoomFormCallback, SubmitPrivateRoomJoinOptions } from "@/interfaces/room-create-form";
import { db } from "@/server/db";
import {IRoomUser} from "@/interfaces/room-info";

export async function submitPrivateRoomJoin({ id, name }: SubmitPrivateRoomJoinOptions): Promise<RoomFormCallback> {
  if (!id || !name) return { success: false, message: "Wrong input values! (#0.0)" };
  if (!id || id < 0 || id > 999999) return { success: false, message: "Wrong id value! (#0.1)" };
  if (!name || name.length < 3 ) return { success: false, message: "Wrong name value! (#0.2)" };

  const room = await db.rooms.findFirst({ where: { id: id } });
  if (!room) return { success: false, message: "Error while fetching room! (#0.3)" };
  if (room.players.includes(name)) return {success: false, message: "User in the room already has that name! (#0.4)"};

  const _players = JSON.parse(room.players) as IRoomUser[];
  _players.push({
    name: name,
    accepted: false
  });

  await db.rooms.update({ where: {id: id}, data: {
    players: JSON.stringify(_players)
  }});

  return {
    success: true,
    message: "Successfully requested to join room!"
  };
}