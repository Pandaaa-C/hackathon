import z from "zod";

export const createRoomFormSchema = z.object({
  name: z.string().min(6, "The name requires at least 6 characters.").max(20, "The name can only be 20 characters long."),
  topic: z.string().min(6, "The topic requires at least 8 characters.").max(20, "The topic can only be 20 characters long."),
  difficulty: z.string().min(4, "The difficulty requires at least 8 characters.").max(16, "The difficulty requires at least 16 characters"),
  iso: z.string().min(4, "You need to select a file."),
});