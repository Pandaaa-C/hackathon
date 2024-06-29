import AdminBody from "@/components/admin/admin-body";
import { getServerAuthSession } from "@/server/auth";
import LoginPage from "../login/page";
import { db } from "@/server/db";
import AdminHeader from "@/components/admin/admin-header";

export default async function AdminPage() {
  const session = await getServerAuthSession();
  if (!session) return <LoginPage />;

  const rooms: { id: number, name: string }[] = [];
  const userRoom = await db.rooms.findMany({
    where: {
      creator_id: session.user.id
    }
  });

  for (const room of userRoom) {
    rooms.push({
      id: room.id,
      name: room.name
    })
  }

  return (
    <>
      <AdminHeader />
      <AdminBody rooms={rooms} />
    </>
  )
}