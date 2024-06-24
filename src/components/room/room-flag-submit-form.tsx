"use client";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import toast from "react-hot-toast";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { roomFlagSubmitFormSchema } from "@/interfaces/room-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RoomFlagSubmit({ roomId }: { roomId: number }) {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<z.infer<typeof roomFlagSubmitFormSchema>>({
    resolver: zodResolver(roomFlagSubmitFormSchema),
    defaultValues: {
      id: roomId
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    toast.success('Submitting flag..');
  });

  return (
    <form onSubmit={onSubmit} className={cn("w-full min-h-[10%] p-4 gap-2 flex flex-col justify-center items-center bg-black rounded")}>
      <div className={cn("grid w-[90%] max-w-sm items-center gap-1")}>
        <Label htmlFor="flag" className={cn("text-base font-bold")}>Submit flag:</Label>
        <Label className={cn("text-base font-bold")}>
          {
            formState.errors.flag && <p className={cn("text-red-500 text-sm")}>{formState.errors.flag.message}</p>
          }
        </Label>
        <Input {...register('flag')} type="text" id="flag" placeholder="BSDC-TEST-FLAG-123" autoComplete={"off"} />
      </div>
      <button type="submit" className={cn("w-[90%] h-full rounded bg-background text-base font-bold hover:bg-gray-600 transition-colors flex justify-center items-center")}>
        Submit
      </button>
    </form>
  );
}