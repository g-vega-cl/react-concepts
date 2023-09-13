import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionProviders } from "./providers";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="bg-white">
        <SessionProviders session={session}>{children}</SessionProviders>
      </body>
    </html>
  );
};

export default RootLayout;
