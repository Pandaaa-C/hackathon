import { cn } from "@/lib/utils";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardBody from "@/components/dashboard/dashboard-body";
import dynamic from "next/dynamic";

export default function Home() {
    const ParticlesWithNoSSR = dynamic(() => import("@/components/particles"), {
        ssr: false,
    });

    return (
        <div className={cn("")}>
            <ParticlesWithNoSSR />
            <DashboardHeader></DashboardHeader>
            <DashboardBody></DashboardBody>
        </div>
    );
}
