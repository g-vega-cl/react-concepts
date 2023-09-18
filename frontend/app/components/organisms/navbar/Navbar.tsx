"use client";
import { LogInButton, LogOutButton } from "@/app/components/atoms";
import { useAuthentication } from "@/app/hooks/useIsAuthenticated";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  const { isAuthenticated, session } = useAuthentication();
  return (
    <div>
      <div className="flex content-center border-gray-200 border-solid border-b p-2  justify-between">
        <Link as={NextLink} href="/">
          <p className="text-black text-lg font-bold flex items-center">
            César Vega - React concepts
          </p>
        </Link>
        <div className="flex gap-x-4">
          {isAuthenticated ? <LogOutButton /> : <LogInButton />}
          <p className="text-black text-sm font-bold flex items-center">
            {session.data?.user?.name}
          </p>
        </div>
      </div>
    </div>
  );
};
