"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";
import { PinkButton } from "../../atoms";

export const InterfaceSegregationPrinciple = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Flex className="gap-4 align-center mt-3  justify-between">
        <Heading as="h2" size="lg">
          Interface Segregation Principle.
        </Heading>
        <PinkButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"}
        </PinkButton>
      </Flex>
      {isOpen && (
        <Box>
          <Text as="cite" className="mt-1">
            Allows to split the responsibility of a class without LSP violation.
          </Text>
          <Text className="mt-1">
            More interfaces are better than too little.
          </Text>

          <Text className="mt-1">
            There are no interfaces in JavaScript. So we will use typescript to
            exemplify. Taking the example from above we can split the Car class
            into two
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
interface Car {
    brand: string;
    model: string;
}

interface ElectricCar extends Car {
    charge: () => void;
    battery: number;
}

interface CombustionCar extends Car {
    shift: () => void;
    fuel: number;
}
`}
          </SyntaxHighlighter>
          <Text className="mt-1">
            Your higher interface should encompass only the minimum common
            denominators.
          </Text>
        </Box>
      )}
    </Box>
  );
};
