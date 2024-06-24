"use client";

import { useRouter } from "next/navigation";

export default function RoomRootPage() {
  const router = useRouter();
  router.push("/");
}