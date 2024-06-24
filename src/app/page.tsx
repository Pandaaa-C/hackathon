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
        { id: 6, name: "Room 7", topic: "Web", difficulty: "Easy", currentPlayers: 0, maxPlayers: 5, open: false },
        { id: 7, name: "Room 8", topic: "Web", difficulty: "Hard", currentPlayers: 15, maxPlayers: 15, open: true },
        { id: 8, name: "Room 9", topic: "Web", difficulty: "Medium", currentPlayers: 4, maxPlayers: 10, open: false },
        { id: 9, name: "Room 10", topic: "Infrastructure", difficulty: "Easy", currentPlayers: 2, maxPlayers: 5, open: true },
        { id: 10, name: "Room 11", topic: "Infrastructure", difficulty: "Medium", currentPlayers: 6, maxPlayers: 10, open: false },
        { id: 11, name: "Room 12", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
        { id: 12, name: "Room 13", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
        { id: 13, name: "Room 14", topic: "Web", difficulty: "Easy", currentPlayers: 0, maxPlayers: 5, open: false },
        { id: 14, name: "Room 15", topic: "Web", difficulty: "Hard", currentPlayers: 15, maxPlayers: 15, open: true },
        { id: 15, name: "Room 16", topic: "Web", difficulty: "Medium", currentPlayers: 4, maxPlayers: 10, open: false },
        { id: 16, name: "Room 17", topic: "Infrastructure", difficulty: "Easy", currentPlayers: 2, maxPlayers: 5, open: true },
        { id: 17, name: "Room 18", topic: "Infrastructure", difficulty: "Medium", currentPlayers: 6, maxPlayers: 10, open: false },
        { id: 18, name: "Room 19", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
        { id: 19, name: "Room 20", topic: "Infrastructure", difficulty: "Hard", currentPlayers: 10, maxPlayers: 15, open: false },
    ];

    return (
        <div className={cn("")}>
            <DashboardParticles />
            <DashboardHeader />
            <DashboardBody rooms={rooms} />
        </div>
    );
}
