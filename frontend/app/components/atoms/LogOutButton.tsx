import { signOut } from "next-auth/react";

export const LogOutButton = () => {
  return (
    <button
      className="text-sm font-bold bg-purple-500 text-white hover:bg-purple-400"
      onClick={() => signOut()}
    >
      Log Out
    </button>
  );
};
