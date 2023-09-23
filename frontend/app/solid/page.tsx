"use client";
import { Heading, Text } from "@chakra-ui/react";
import { SingleResponsibilityPrinciple } from "@/app/solid/molecules/singleResponsibilityPrinciple/SingleResponsibilityPrinciple";
import { OpenClosedPrinciple } from "@/app/solid/molecules/openClosedPrinciple/OpenClosedPrinciple";
import { LiskovSubstitutionPrinciple } from "@/app/solid/molecules/liskovSubstitutionPrinciple/LiskovSubstitutionPrinciple";
import { InterfaceSegregationPrinciple } from "@/app/solid/molecules/interfaceSegregationPrinciple/InterfaceSegregationPrinciple";
import { DependencyInversionPrinciple } from "@/app/solid/molecules/dependencyInversionPrinciple/DependencyInversionPrinciple";
import { ParallaxMotionBox } from "@/app/components/atoms/MotionBox";

const Page = () => {
  return (
    <ParallaxMotionBox>
      <Heading as="h1">SOLID</Heading>
      <Text className="mt-1">
        SOLID principles are a set of software design principles that guide
        developers in creating robust, maintainable, and flexible applications.
        These principles are commonly used in object-oriented programming, but
        they can also be applied in other programming paradigms, including
        JavaScript.
      </Text>
      <Text className="mt-1">
        In this page I will use vehicles as an example to explain each
        principle.
      </Text>
      <SingleResponsibilityPrinciple />
      <OpenClosedPrinciple />
      <LiskovSubstitutionPrinciple />
      <InterfaceSegregationPrinciple />
      <DependencyInversionPrinciple />
    </ParallaxMotionBox>
  );
};

export default Page;
