"use client";

import { cn } from "@/lib/utils";
import { Cake, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { roomInputFormSchema } from "@/interfaces/room-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { submitPrivateRoomCode } from "@/app/admin/create/(form)/submitPrivateRoomCode";

export default function RoomCodeInput({ id, name, close, callback }: { id: number, name: string, close: () => void, callback: (id: number) => void }) {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<z.infer<typeof roomInputFormSchema>>({
    resolver: zodResolver(roomInputFormSchema),
    defaultValues: {
      id: id
    }
  })
  const onSubmit = handleSubmit(async (data) => {
    const result = await submitPrivateRoomCode(data);
    result.success ? toast.success(result.message) : toast.error(result.message);

    if (result.success) {
      close();

      setTimeout(() => callback(id), 500);
    }
  });

  return (
    <div className={cn("z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md transform")}>
      <form onSubmit={onSubmit} className={cn("w-96 min-h-48 bg-black rounded relative flex items-center p-5 flex-col gap-2")}>
        <X className={cn("absolute top-0 right-0 m-1 hover:cursor-pointer")} onClick={close}></X>
        <p className={cn("text-xl font-bold")}>{name}</p>
        <div className={cn("grid w-[90%] max-w-sm items-center gap-2")}>
          <Label htmlFor="code" className={cn("text-base font-bold")}>Code</Label>
          <Input {...register('code')} type="text" id="code" placeholder="AGREWJL541" autoComplete={"off"} />
        </div>
        {
          formState.errors.code && <p className={cn("text-red-500 text-sm")}>{formState.errors.code.message}</p>
        }
        <div className={cn("w-full h-12 flex justify-center items-center")}>
          <button type="submit" className={cn("w-56 h-[80%] rounded bg-green-700 text-base font-bold hover:bg-green-900 transition-colors")}>Join</button>
        </div>
      </form>
    </div>
  )
}