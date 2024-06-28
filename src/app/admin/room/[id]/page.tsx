import AdminRoomBody from "@/components/admin-room/admin-room-body";
import { IAdminRoom } from "@/interfaces/room-info";
import { db } from "@/server/db";

export default async function AdminRoomOverviewPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const room = await db.rooms.findFirst({where: {id: id}}) as IAdminRoom;
  
  return (
    <>
      <AdminRoomBody room={room} />
    </>
  )
}