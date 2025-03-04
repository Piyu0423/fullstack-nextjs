import NextAuth from "next-auth";
import { IUser } from "@models/user";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      username: string;
      image: string;
    };
  }

  interface User extends IUser {}
}
