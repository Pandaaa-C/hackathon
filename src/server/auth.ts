"use server";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { db } from "./db";
import { LoginFormCallback } from "@/interfaces/login-form";
import { compare } from "bcrypt";


export const getServerAuthSession = () => getServerSession(authOptions as any);

export async function Authenticate(username: string, password: string): Promise<LoginFormCallback> {
  console.log(username, password);
  if (!username || !password) {
    return {
      success: false,
      message: "Username or password is invalid!",
      data: null
    };
  }

  const user = await db.accounts.findMany({
    where: { username: username },
  });
  if (!user[0]) {
    return {
      success: false,
      message: "User has not been found!",
      data: null
    };
  }

  if (!await compare(password, user[0].password)) {
    return {
      success: false,
      message: "Wrong password!",
      data: null
    };
  }

  return {
    success: true,
    message: "Success",
    data: user
  };
}
