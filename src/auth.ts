import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { database } from "@/src/database/database";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// if we do not have github credentials, we are going to throw an error
if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("missing github credentials for oAuth service");
}

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(database),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // ? usually not needed, we are just fixing a bug here in this version of next auth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
