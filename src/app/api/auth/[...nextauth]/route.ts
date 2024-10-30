import { authOptions } from "@/lib/nextAuth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export {handler as POST, handler as GET};
