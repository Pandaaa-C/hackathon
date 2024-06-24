import dynamic from "next/dynamic";

export default function RoomParticles() {
  const ParticlesWithNoSSR = dynamic(() => import("@/components/particles"), {
    ssr: false,
  });

  return <ParticlesWithNoSSR />
}