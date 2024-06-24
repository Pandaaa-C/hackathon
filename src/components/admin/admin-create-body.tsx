"use client";

import { cn } from "@/lib/utils";
import AdminCreateForm from "./admin-create-form";

export default function AdminCreateRoom() {
  return (
    <div className={cn("w-full h-screen p-3")}>
      <AdminCreateForm />
    </div>
  )
}