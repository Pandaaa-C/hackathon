"use server";

import { IRoomUser } from "@/interfaces/room-info";
import { db } from "@/server/db";

export default async function acceptUserToRoomForm(roomId: number, user: IRoomUser): Promise<boolean> {
  if (!roomId || !user) return false;
  if (!roomId || roomId < 0 || roomId > 999999) return false;
  if (!user || user.accepted || !user.name || user.name.length < 1 || user.name.length > 50) return false;

  const _room = await db.rooms.findFirst({ where: { id: roomId } });
  if (!_room) return false;

  const _players = JSON.parse(_room.players) as IRoomUser[];
  const _player = _players.find(x => x.name == user.name);
  if (!_player) return false;
  _player.accepted = true;

  await db.rooms.update({
    where: {
      id: roomId
    },
    data: {
      players: JSON.stringify(_players)
    }
  });

  return true;
}
