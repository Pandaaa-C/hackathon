"use server";

import { RoomFormCallback, SubmitPrivateRoomCodeOptions } from "@/interfaces/room-create-form";
import { db } from "@/server/db";

export async function submitPrivateRoomCode({ id, code }: SubmitPrivateRoomCodeOptions): Promise<RoomFormCallback> {
  if (!id || !code) return { success: false, message: "Wrong input values! (#0.0)" };
  if (!id || id < 0 || id > 999999) return { success: false, message: "Wrong id value! (#0.1)" };
  if (!code || code.length < 2 || code.length > 10) return { success: false, message: "Wrong code value! (#0.2)" };

  const room = await db.rooms.findFirst({ where: { id: id } });
  if (!room || room.code != code) return {
    success: false,
    message: "Wrong room code! (#0.3)"
  };

  return {
    success: true,
    message: "Successfully verified room code!"
  };
}