import z from "zod";

export const createRoomFormSchema = z.object({
  name: z.string().min(3, "The name requires at least 3 characters.").max(20, "The name can only be 20 characters long."),
  topic: z.string().min(3, "The topic requires at least 3 characters.").max(20, "The topic can only be 20 characters long."),
  difficulty: z.string(),
  iso: z.string(),
  private: z.boolean(),
});