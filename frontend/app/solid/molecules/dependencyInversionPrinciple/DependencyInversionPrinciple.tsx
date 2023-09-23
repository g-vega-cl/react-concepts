"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import { PinkButton } from "../../../components/atoms";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const DependencyInversionPrinciple = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Flex className="gap-4 align-center mt-3  justify-between">
        <Heading as="h2" size="lg">
          Dependency Inversion Principle
        </Heading>
        <PinkButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"}
        </PinkButton>
      </Flex>
      {isOpen && (
        <Box>
          <Text as="cite" className="mt-1">
            High-level modules should not import anything from low-level
            modules; they should both depend on abstractions
          </Text>
          <Text className="mt-1">
            One should depend on abstraction and not concrete instances.
          </Text>

          <Text className="mt-1">
            Instead of having a specific car with specific tires. Abstract the
            tires and let the vehicle have a dependency on the TIRE class.
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
class Vehicle {
    constructor(model) {
        this.model = model;
        this.fuel = 100;
        this.maintenanceDate = null;
    }

    accelerate(engine) {
        if(engine instanceof CombustionEngine) {
            engine.shift();
        }

        if(engine instanceof ElectricEngine) {
            engine.power();
        }
    }

}

class CombustionEngine {
    // implementation
}

class ElectricEngine {
    // implementation
}
`}
          </SyntaxHighlighter>
          <Text className="mt-1 font-bold">
            To avoid the issue we should abstract the engine classes and
            the accelerate method on each.
          </Text>
          <SyntaxHighlighter
            language="typescript"
            style={docco}
            showLineNumbers
          >
            {`
class Vehicle {
    constructor(model) {
        this.model = model;
        this.fuel = 100;
        this.maintenanceDate = null;
    }
}

class CombustionEngine {
    // implementation
    accelerate(){
      // Combustion implementation
    }
}

class ElectricEngine {
    // implementation
    accelerate(){
      // Electric implementation
    }
}
`}
          </SyntaxHighlighter>
        </Box>
      )}
    </Box>
  );
};
