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
import { ChangeEvent } from "react";
import { submitRoomForm } from "@/app/admin/create/(form)/submitRoomForm";
import { useRouter } from "next/navigation";

export default function AdminCreateForm({ templates }: { templates: string[] }) {
  const router = useRouter();

  const {
    setValue,
    register,
    handleSubmit,
    formState,
  } = useForm<z.infer<typeof createRoomFormSchema>>({
    resolver: zodResolver(createRoomFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await submitRoomForm({
      name: data.name,
      difficulty: data.difficulty,
      iso: data.iso,
      maxPlayers: data.maxPlayers,
      playTime: data.playTime,
      topic: data.topic,
      privateRoom: data.private
    });
    result.success ? toast.success(result.message) : toast.error(result.message);

    if (result.success) router.push("/admin/room/" + result.id);
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
        <Label htmlFor="maxPlayers" className={cn("text-base font-bold")}>Max Players</Label>
        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => setValue("maxPlayers", parseInt(event.currentTarget.value))} type="number" id="maxPlayers" placeholder="50" autoComplete={"off"} />
        {
          formState.errors.maxPlayers && <p className={cn("text-red-500 text-sm")}>{formState.errors.maxPlayers.message}</p>
        }
        <Label htmlFor="playTime" className={cn("text-base font-bold")}>Play Time</Label>
        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => setValue("playTime", parseInt(event.currentTarget.value))} type="number" id="playTime" placeholder="24" autoComplete={"off"} />
        {
          formState.errors.playTime && <p className={cn("text-red-500 text-sm")}>{formState.errors.playTime.message}</p>
        }
        <Label htmlFor="topic" className={cn("text-base font-bold")}>Difficulty</Label>
        <Select onValueChange={(value: string) => setValue("difficulty", value)}>
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
          <Label htmlFor="iso" className={cn("font-bold text-base")}>Choose template</Label>
          <Select onValueChange={(value: string) => setValue("iso", value)}>
            <SelectTrigger>
              <SelectValue {...register('iso')} placeholder="Select an iso" />
            </SelectTrigger>
            <SelectContent className={cn("bg-background")}>
              <SelectGroup>
                {
                  templates.map((template, index) => {
                    return <SelectItem key={index} className={cn("hover:bg-black cursor-pointer")} value={template}>{template}</SelectItem>
                  })
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* <Input id="iso" onChange={(event) => setValue("iso", event.target.value)} type="file" /> */}
        </div>
        {
          formState.errors.iso && <p className={cn("text-red-500 text-sm")}>{formState.errors.iso.message}</p>
        }
        <div className="flex items-center space-x-2">
          <Checkbox onCheckedChange={(value: boolean) => setValue("private", value)} id="private" />
          <Label htmlFor="private" className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")}>Create a private room?</Label>
        </div>
        <div className={cn("w-full h-12 flex justify-center items-center")}>
          <button type="submit" className={cn("w-56 h-[80%] rounded bg-green-700 text-base font-bold hover:bg-green-900 transition-colors")}>Submit</button>
        </div>
      </div>
    </form>
  )
}
