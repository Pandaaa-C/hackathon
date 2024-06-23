import { cn } from "@/lib/utils";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardBody from "@/components/dashboard/dashboard-body";
import DashboardParticles from "@/components/dashboard/dashboard-particles";

export const dynamic = 'force-dynamic'
export const revalidate = 600

export default function Home() {
    const rooms = [
        { id: 0, name: "Room 1", topic: "Web", difficulty: "Easy", currentPlayers: 0, maxPlayers: 5, open: false },
        { id: 1, name: "Room 2", topic: "Web", difficulty: "Hard", currentPlayers: 15, maxPlayers: 15, open: true },
        { id: 2, name: "Room 3", topic: "Web", difficulty: "Medium", currentPlayers: 4, maxPlayers: 10, open: false },
        { id: 3, name: "Room 4", topic: "Infrastructure", difficulty: "Easy", currentPlayers: 2, maxPlayers: 5, open: true },
        { id: 4, name: "Room 5", topic: "Infrastructure", difficulty: "Medium", currentPlayers: 6, maxPlayers: 10, open: false },
        { id: 5, name: "Room 6", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
    ];

    return (
        <div className={cn("")}>
            <DashboardParticles />
            <DashboardHeader />
            <DashboardBody rooms={rooms} />
        </div>
    );
}
