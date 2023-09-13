import { signIn } from "next-auth/react";

export const LogInButton = () => {
  return (
    <button
      className="text-sm font-bold bg-pink-500 text-white hover:bg-pink-400"
      onClick={() => signIn("google")}
    >
      Log In
    </button>
  );
};
