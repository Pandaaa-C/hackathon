import { Authenticate } from "@/server/auth";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/server/db";
import { hash } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req): Promise<any> {
                const { username, password } = credentials as { username: string; password: string };
                const user = await Authenticate(username, password);
                if (!user.success) {
                    throw new Error(user.message);
                }

                return user.data;
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    },
    jwt: {
        maxAge: 60 * 60,
    },
    callbacks: {
        jwt: async ({ token, user }: any) => {
            if (user) {
                token.id = user.id;
            }

            return token;
        },

        session: async ({ session, token, user }: any) => {
            if (token) {
                session.user.id = token.id;
            }

            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
};

export default NextAuth(authOptions as any)