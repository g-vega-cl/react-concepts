"use client";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { ButtonSize, PinkButton } from "@/app/components/atoms";
export default function Home() {
  return (
    <main>
      <Flex className="gap-8">
        <Link as={NextLink} href="/solid">
          <PinkButton buttonSize={ButtonSize.MD}>SOLID</PinkButton>
        </Link>
        <Link as={NextLink} href="/code_smells">
          <PinkButton buttonSize={ButtonSize.MD}>Code Smells</PinkButton>
        </Link>
      </Flex>
    </main>
  );
}
