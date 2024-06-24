"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";

export default function RoomLeaderboard() {
  const [players, setPlayers] = useState<{ id: number, name: string, flags: number }[]>([
    { id: 0, name: "Liam 1", flags: 10 },
    { id: 1, name: "Liam 2", flags: 20 },
    { id: 2, name: "Liam 3", flags: 0 },
    { id: 3, name: "Liam 4", flags: 5 },
    { id: 4, name: "Liam 5", flags: 5 },
    { id: 5, name: "Liam 6", flags: 5 },
    { id: 6, name: "Liam 7", flags: 5 },
    { id: 7, name: "Liam 8", flags: 5 },
    { id: 8, name: "Liam 9", flags: 5 },
    { id: 9, name: "Liam 10", flags: 5 },
    { id: 10, name: "Liam 11", flags: 100 },
    { id: 11, name: "Liam 12", flags: 5 },
    { id: 12, name: "Liam 13", flags: 5 },
    { id: 12, name: "Liam 14", flags: 5 },
    { id: 14, name: "Liam 15", flags: 5 },
  ]);

  return (
    <div className={cn("w-full h-full bg-black rounded")}>
      <header className={cn("h-[7%] flex justify-center items-center")}>
        <p className={cn("font-bold text-2xl")}>Top 10 - Leaderboard</p>
      </header>
      <Table>
      <TableCaption>A list of the top 10 players.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={cn("font-bold text-lg w-[10%]")}>Rank</TableHead>
            <TableHead className={cn("font-bold text-lg")}>Name</TableHead>
            <TableHead className={cn("font-bold text-lg w-[10%]")}>Flags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            players.sort((a, b) => b.flags - a.flags).slice(0, 10).map((player, index) => {
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