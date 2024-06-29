"use server";

import { CreateRoomFormCallback, SubmitCreateRoomFormOptions } from "@/interfaces/room-create-form";
import { createRandomString } from "@/lib/generateRoomCode";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export async function submitRoomForm({ name, topic, difficulty, maxPlayers, playTime, iso, privateRoom }: SubmitCreateRoomFormOptions): Promise<CreateRoomFormCallback> {
  if (!name || !topic || !difficulty || !maxPlayers || !iso) return { success: false, message: "Wrong input values! (#0.0)", id: -1 };
  if (!name || name.length < 2 || name.length > 40) return { success: false, message: "Wrong name value! (#0.1)", id: -1 };
  if (!topic || topic.length < 2 || topic.length > 40) return { success: false, message: "Wrong topic value! (#0.2)", id: -1 };
  if (!difficulty || difficulty.length < 2 || difficulty.length > 40) return { success: false, message: "Wrong difficulty value! (#0.3)", id: -1 };
  if (!maxPlayers || maxPlayers < 0 || maxPlayers > 50) return { success: false, message: "Wrong maxPlayers value! (#0.4)", id: -1 };
  if (!iso) return { success: false, message: "Wrong iso value! (#0.5)", id: -1 };

  const session = await getServerAuthSession();
  if (!session) return { success: false, message: "Session error! (#0.6)", id: -1 };

  const rooms = await db.rooms.findMany({});
  if (rooms.find(x => x.name == name)) return {
    id: -1,
    message: "A room with that name already exists! (#0.7)",
    success: false
  };

  const room = await db.rooms.create({
    data: {
      name: name.trim(),
      creator_id: session.user.id,
      topic: topic.trim(),
      difficulty: difficulty,
      maxPlayers: maxPlayers,
      players: "[]",
      iso: iso,
      private: privateRoom,
      code: privateRoom ? createRandomString(10) : "",
      created_at: new Date(),
      playTime: playTime
    }
  });

  return {
    success: true,
    message: "Successfully created room!",
    id: room.id
  }
}