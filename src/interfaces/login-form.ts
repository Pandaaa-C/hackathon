import z from "zod";

export const loginFormSchema = z.object({
    username: z.string().min(6, "The username requires at least 6 characters."),
    password: z.string().min(8, "The password requires at least 8 characters."),
});

export type LoginFormCallback = {
    success: boolean;
    message: string;
    data: any;
}