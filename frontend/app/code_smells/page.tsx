"use client";
import { Heading, Text } from "@chakra-ui/react";
import { ParallaxMotionBox } from "@/app/components/atoms/ParallaxMotionBox";
import { Coupling } from "@/app/code_smells/molecules";

const Page = () => {
  return (
    <ParallaxMotionBox>
      <Heading as="h1">Code Smells</Heading>
      <Text className="mt-1">
        Code smells are patterns in the code that need refactoring even if the
        code works. They indicate weaknesses in design that slow down
        development and cause bugs.
      </Text>
      <Coupling/>
    </ParallaxMotionBox>
  );
};

export default Page;
