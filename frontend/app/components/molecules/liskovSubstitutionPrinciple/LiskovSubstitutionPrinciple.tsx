"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { PinkButton } from "../../atoms";

export const LiskovSubstitutionPrinciple = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Flex className="gap-4 align-center mt-3  justify-between">
        <Heading as="h2" size="lg">
          Liskov Substitution Principle.
        </Heading>
        <PinkButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"}
        </PinkButton>
      </Flex>
      {isOpen && (
        <Box>
          <Text as="cite" className="mt-1">
            You should be able to change an instance using a sub-type and your
            code should still work.
          </Text>
          <Text className="mt-1">
            You should not have a <span className="italic">VEHICLE</span> class
            with a method called <span className="italic">SHIFT()</span>. And
            then have have a subclass called{" "}
            <span className="italic">ELECTRIC CAR</span> because ELECTRIC CARS
            don&apos;t SHIFT. So you have an inherited method that should not exist.
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
class Car {
	constructor(brand, model){
    this.brand = brand;
    this.model = model;
	}

}

class CombustonCar extends Car {
    shift(){
        console.log("Shifting gears");
    }
}

class ElectricCar extends Car {
  constructor(charge){
    this.charge = charge;
  }
  charge(){
    console.log("Charging");
  }
}
`}
          </SyntaxHighlighter>
          <Text className="mt-1">
            Your higher classes should encompass only the minimum common
            denominators.
          </Text>
        </Box>
      )}
    </Box>
  );
};
