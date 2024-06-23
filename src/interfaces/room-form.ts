import z from "zod";

export const roomInputFormSchema = z.object({
  id: z.number().min(1, "The Room ID has not been set, re-try."),
  code: z.string().min(10, "The Room Code requires 10 characters.").max(10, "The Room Code requires 10 characters."),
});

export const roomJoinInputFormSchema = z.object({
  id: z.number().min(1, "The Room ID has not been set, re-try."),
  name: z.string().min(4, "Your username has to be atleast 4 characters.").max(16, "Your username can only have 16 characters."),
});