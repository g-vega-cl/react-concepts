"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { PinkButton } from "../../atoms";

export const OpenClosedPrinciple = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Flex className="gap-4 align-center mt-3  justify-between">
        <Heading as="h2" size="lg">
          Open Closed Principle.
        </Heading>
        <PinkButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"}
        </PinkButton>
      </Flex>
      {isOpen && (
        <Box>
          <Text as="cite" className="mt-1">
            A class should be open for extension, but closed for modification.
          </Text>
          <Text className="mt-1">
            Even when you split responsibility of a class, you should do so in a
            way that behavior can be extended or replaced. You can have a
            <span className="italic">VEHICLE</span> class with{" "}
            <span className="italic">ACCELERATE()</span>, and have CAR, BIKE,
            TRUCK, etc… Subclasses that have the specializations.
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

class CarFilter {
  filterByBrand(cars, brand){
    return cars.filter(car => car.brand === brand);
  }
  
  filterByModel(cars, model){
    return cars.filter(car => car.model === model);
  }
}
`}
          </SyntaxHighlighter>
          <Text className="mt-1 font-bold">
            This class violates the OCP because if we want to filter by any
            other new property we have to change CarFilter's code
          </Text>
          <Text className="mt-1">
            Using OCP we can refactor the class to have a filterByProp function.
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
class CarFilter {
  filterByProps(array, propName, value){
    return array.filter(element => element[propName] === value)
  }
}
`}
          </SyntaxHighlighter>
          <Text className="mt-1">
            Keep in mind that modifying a class will affect everywhere that
            class is used. Another example of OCP is to extend a class to
            phase out a deprecated method.
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
class CarFilter {
  // Deprecated
  filterByProps(array, propName, value){
    return array.filter(element => element[propName] === value)
  }

  improvedFilter(array, propName, value){
    return betterFilter(array, propName, value)
  }
}
`}
          </SyntaxHighlighter>
        </Box>
      )}
    </Box>
  );
};
