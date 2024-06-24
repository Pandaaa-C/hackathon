import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className={cn("w-screen h-screen flex justify-center items-center flex-col backdrop-blur bg-neutral-950 bg-opacity-80 gap-10")}>
      <div className={cn("w-[15rem] h-[15rem] rounded-[50%] bg-transparent border-[15px] border-transparent border-t-[15px] border-t-blue-800 animate-spin")}></div>
      <p>The page is loading longer then expected!</p>
    </div>
  )
}