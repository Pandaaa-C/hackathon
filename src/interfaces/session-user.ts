export interface ISession {
  user: ISessionUser;
}

export interface ISessionUser {
  name: string;
  email: string;
  image: string;
  id: number;
}