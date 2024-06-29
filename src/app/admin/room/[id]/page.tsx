import LoginPage from "@/app/login/page";
import AdminRoomBody from "@/components/admin-room/admin-room-body";
import AdminRoomHeader from "@/components/admin-room/admin-room-header";
import { IAdminRoom } from "@/interfaces/room-info";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import Custom404 from "@/app/404";

export default async function AdminRoomOverviewPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const session = await getServerAuthSession();
  if (!session) {
    return <LoginPage />
  }

  const room = await db.rooms.findFirst({ where: { id: id, creator_id: session.user.id } }) as IAdminRoom;
  if (!room) {
    return <Custom404 message="" />
  }
  
  const roomFinishDate = room.created_at;
  roomFinishDate.setHours(room.created_at.getHours() + room.playTime);

  return (
    <>
      <AdminRoomHeader />
      <AdminRoomBody finishDate={roomFinishDate} room={room} players={JSON.parse(room.players)} session={session} />
    </>
  )
}