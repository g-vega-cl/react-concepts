"use client";
import { LogInButton, LogOutButton } from "@/app/components/atoms";
import { useAuthentication } from "@/app/hooks/useIsAuthenticated";

export const Navbar = () => {
  const { isAuthenticated, session } = useAuthentication();
  return (
    <div>
      <div className="flex content-center border-gray-200 border-solid border-b p-2  justify-between">
        <p className="text-black text-lg font-bold flex items-center">
          Conway's Game of Life
        </p>
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
