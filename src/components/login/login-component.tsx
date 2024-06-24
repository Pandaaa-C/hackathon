"use client";

import {cn} from "@/lib/utils";
import LoginForm from "@/components/login/login-form";

export default function LoginComponent() {

    return (
        <div className={cn("w-full h-screen flex items-center justify-center")}>
            <div className={cn("w-[350px] h-[350px] bg-black flex flex-col rounded p-1")}>
                <div className={cn("w-full h-[50px] flex justify-center items-center")}>
                    <p className={cn("font-bold text-2xl")}>Admin Login</p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}