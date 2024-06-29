"use server";

import { IRoomUser } from "@/interfaces/room-info";
import { db } from "@/server/db";

export default async function removeUserFromRoomForm(roomId: number, user: IRoomUser): Promise<boolean> {
  if (!roomId || !user) return false;
  if (!roomId || roomId < 0 || roomId > 999999) return false;
  if (!user || !user.accepted || !user.name || user.name.length < 1 || user.name.length > 50) return false;

  const _room = await db.rooms.findFirst({ where: { id: roomId } });
  if (!_room) return false;

  const _players = JSON.parse(_room.players) as IRoomUser[];
  const _index = _players.findIndex(x => x.name.trim() == user.name.trim());
  if (_index < 0) return false;
  _players.splice(_index, 1);

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
