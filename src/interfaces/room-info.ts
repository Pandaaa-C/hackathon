export interface IRoomInfo {
  id: number;
  name: string;
  topic: string;
  difficulty: string;
  currentPlayers: number;
  maxPlayers: number;
  open: boolean;
}

export interface IRoomUser {
  name: string;
  accepted: boolean;
  flags: number;
}

export interface IAdminRoom {
  id: number;
  name: string;
  code: string;
  created_at: Date;
  difficulty: string;
  iso: string;
  maxPlayers: number;
  playTime: number;
  players: string;
  private: boolean;
  topic: string;
}
