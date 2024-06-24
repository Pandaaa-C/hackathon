"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function RoomLeaderboard() {
  const [players, setPlayers] = useState<{ id: number, name: string, flags: number }[]>([
    { id: 0, name: "Liam 1", flags: 10 },
    { id: 1, name: "Liam 2", flags: 20 },
    { id: 2, name: "Liam 3", flags: 0 },
    { id: 3, name: "Liam 4", flags: 5 },
  ]);

  return (
    <div className={cn("w-full h-full bg-black rounded")}>
      <header className={cn("h-[7%] flex justify-center items-center")}>
        <p className={cn("font-bold text-2xl")}>Leaderboard</p>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={cn("font-bold text-lg")}>Rank</TableHead>
            <TableHead className={cn("font-bold text-lg")}>Name</TableHead>
            <TableHead className={cn("font-bold text-lg")}>Flags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            players.sort((a, b) => b.flags - a.flags).map((player, index) => {
              return (
                <TableRow key={player.id} className={cn("h-[5%]")}>
                  <TableCell className={cn("text-base")}>{index+1}</TableCell>
                  <TableCell className={cn("text-base")}>{player.name}</TableCell>
                  <TableCell className={cn("text-base")}>{player.flags}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}