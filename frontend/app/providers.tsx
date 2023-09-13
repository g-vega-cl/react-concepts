"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ISessionProviders {
  children: React.ReactNode;
  session: Session | null;
}

export const SessionProviders = ({ children, session }: ISessionProviders) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
