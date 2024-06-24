import RoomBody from "@/components/room/room-body";
import RoomHeader from "@/components/room/room-header";
import RoomParticles from "@/components/room/room-particles";

export default function RoomOverviewPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  return (
    <>
      <RoomParticles />
      <RoomHeader />
      <RoomBody />
    </>
  )
}