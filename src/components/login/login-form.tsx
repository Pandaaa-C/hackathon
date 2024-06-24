"use client";

import { useForm } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { loginFormSchema } from "@/interfaces/login-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState
    } = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema)
    })
    const onSubmit = handleSubmit(async (data) => {
        toast.success("Validating login details..");

        setTimeout(() => {
            router.push('/admin')
        }, 100);
    });

    return (
        <form onSubmit={onSubmit} className={cn("w-full h-full flex flex-col items-center justify-center gap-5")}>
            <div className={cn("grid w-[300px] max-w-sm items-center gap-2")}>
                <Label htmlFor="username">Username</Label>
                <Input {...register('username')} type="username" id="username" placeholder="root" autoComplete={"off"} />
            </div>
            <div className={cn("grid w-[300px] max-w-sm items-center gap-2")}>
                <Label htmlFor="password">Password</Label>
                <Input {...register('password')} type="password" id="password" placeholder="toor" autoComplete={"off"} />
            </div>
            {
                formState.errors.username && <p className={cn("text-red-500 text-sm")}>{formState.errors.username.message}</p>
            }
            {
                formState.errors.password && <p className={cn("text-red-500 text-sm")}>{formState.errors.password.message}</p>
            }
            <Button className={cn("bg-background hover:bg-ice-white hover:text-black")} variant="default" type="submit">Authenticate</Button>
        </form>
    )
}
