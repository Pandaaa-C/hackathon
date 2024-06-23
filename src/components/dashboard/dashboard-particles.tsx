import dynamic from "next/dynamic";

export default function DashboardParticles() {
  const ParticlesWithNoSSR = dynamic(() => import("@/components/particles"), {
    ssr: false,
  });

  return <ParticlesWithNoSSR />
}