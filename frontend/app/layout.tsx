import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionProviders } from "./providers";
import { Navbar } from "@/app/components/organisms/navbar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProviders session={session}>
          <div className="bg-white text-black h-full w-full min-h-screen	min-w-screen overflow-x-scroll">
            <Navbar />
            {children}
          </div>
        </SessionProviders>
      </body>
    </html>
  );
};

export default RootLayout;
