"use client";
import { Flex } from "@chakra-ui/react";
import { ButtonSize, PinkButton } from "@/app/components/atoms";
import { Navbar } from "./components/organisms/navbar";

export default function Home() {
  return (
    <main>
      <Flex className="gap-8">
        <PinkButton buttonSize={ButtonSize.MD} href="/solid">
          SOLID
        </PinkButton>
        <PinkButton buttonSize={ButtonSize.MD} href="/code_smells">Code Smells</PinkButton>
      </Flex>
    </main>
  );
}
