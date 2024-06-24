"use client";

import { createRoomFormSchema } from "@/interfaces/room-create-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export default function AdminCreateForm() {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<z.infer<typeof createRoomFormSchema>>({
    resolver: zodResolver(createRoomFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    toast.success('Creating room..');
  });

  return (
    <form onSubmit={onSubmit} className={cn("w-full h-full flex justify-center items-center flex-col gap-4")}>
      <h1 className={cn("text-3xl font-bold")}>Create room</h1>
      <div className={cn("grid w-[40%] max-w-sm items-center gap-3")}>
        <Label htmlFor="name" className={cn("text-base font-bold")}>Room name</Label>
        <Input {...register('name')} type="text" id="name" placeholder="Room 1" autoComplete={"off"} />
        {
          formState.errors.name && <p className={cn("text-red-500 text-sm")}>{formState.errors.name.message}</p>
        }
        <Label htmlFor="topic" className={cn("text-base font-bold")}>Topic</Label>
        <Input {...register('topic')} type="text" id="topic" placeholder="Infrastructure" autoComplete={"off"} />
        {
          formState.errors.topic && <p className={cn("text-red-500 text-sm")}>{formState.errors.topic.message}</p>
        }
        <Label htmlFor="topic" className={cn("text-base font-bold")}>Difficulty</Label>
        <Select>
          <SelectTrigger>
            <SelectValue {...register('difficulty')} placeholder="Select a difficulty" />
          </SelectTrigger>
          <SelectContent className={cn("bg-background")}>
            <SelectGroup>
              <SelectItem className={cn("hover:bg-black cursor-pointer")} value="easy">Easy</SelectItem>
              <SelectItem className={cn("hover:bg-black cursor-pointer")} value="medium">Medium</SelectItem>
              <SelectItem className={cn("hover:bg-black cursor-pointer")} value="hard">Hard</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {
          formState.errors.difficulty && <p className={cn("text-red-500 text-sm")}>{formState.errors.difficulty.message}</p>
        }
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="iso" className={cn("font-bold text-base")}>Choose file</Label>
          <Input id="iso" {...register('iso')} type="file" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="private" />
          <Label htmlFor="topic" className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")}>Create a private room?</Label>
        </div>
        <div className={cn("w-full h-12 flex justify-center items-center")}>
          <button type="submit" className={cn("w-56 h-[80%] rounded bg-green-700 text-base font-bold hover:bg-green-900 transition-colors")}>Submit</button>
        </div>
      </div>
    </form>
  )
}
