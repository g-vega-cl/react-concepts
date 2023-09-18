import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ChakraProviders, SessionProviders } from "@/app/providers";
import { Navbar } from "@/app/components/organisms/navbar";
import { Box } from "@chakra-ui/react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProviders session={session}>
          <ChakraProviders>
            <Box className="bg-white text-black h-full w-full min-h-screen	min-w-screen overflow-x-scroll">
              <Navbar />
              <Box className="p-4">{children}</Box>
            </Box>
          </ChakraProviders>
        </SessionProviders>
      </body>
    </html>
  );
};

export default RootLayout;
