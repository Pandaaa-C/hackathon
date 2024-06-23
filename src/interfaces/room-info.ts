export default interface IRoomInfo {
  id: number;
  name: string;
  topic: string;
  difficulty: string;
  currentPlayers: number;
  maxPlayers: number;
  open: boolean;
}