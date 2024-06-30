import AdminCreateRoom from "@/components/admin/admin-create-body";
import { getServerRoomTemplates } from "@/server/create-room";

export default async function AdminCreatePage() {
  const templates = await getServerRoomTemplates();

  return (
    <AdminCreateRoom templates={templates} />
  )
}