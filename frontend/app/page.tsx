"use client";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { ButtonSize, PinkButton } from "@/app/components/atoms";
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
