import z from "zod";

export const createRoomFormSchema = z.object({
  name: z.string().min(3, "The name requires at least 3 characters.").max(20, "The name can only be 20 characters long."),
  topic: z.string().min(3, "The topic requires at least 3 characters.").max(20, "The topic can only be 20 characters long."),
  difficulty: z.string(),
  maxPlayers: z.number().min(1, "The min players can only be 1").max(50, "Rooms can only have 50 players max."),
  iso: z.string(),
  private: z.boolean(),
});

export type CreateRoomFormCallback = {
  success: boolean;
  message: string;
  id: number;
};

export type RoomFormCallback = {
  success: boolean;
  message: string;
};

export type SubmitCreateRoomFormOptions = {
  name: string;
  topic: string;
  maxPlayers: number;
  difficulty: string;
  iso: string;
  privateRoom: boolean;
};

export type SubmitPrivateRoomCodeOptions = {
  id: number;
  code: string;
};

export type SubmitPrivateRoomJoinOptions = {
  id: number;
  name: string;
};
