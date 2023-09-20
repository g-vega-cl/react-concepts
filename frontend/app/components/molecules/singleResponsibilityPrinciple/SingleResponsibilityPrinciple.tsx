"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SRPAnimation } from "@/app/components/molecules/singleResponsibilityPrinciple/SRPAnimation";
import { useState } from "react";
import { PinkButton } from "../../atoms";

export const SingleResponsibilityPrinciple = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Flex className="gap-4 align-center mt-3 justify-between">
        <Heading as="h2" size="lg">
          Single Responsibility Principle.
        </Heading>
        <PinkButton onClick={() => setIsOpen(!isOpen)} >
          {isOpen ? "Hide" : "Show"}
        </PinkButton>
      </Flex>
      {isOpen && (
        <Box>
          <Text as="cite" className="mt-1">
            A class should have only one reason to change.
          </Text>
          <Text className="mt-1">
            Look at the following vehicle class and notice that it is
            responsible for a lot of things: It drives but also handles fuel
            management and vehicle maintenance details.
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

    drive() {
        console.log({this.model} is driving);
        this.fuel -= 10;
    }

    refuel(amount) {
        this.fuel += amount;
    }

    consume(amount) {
        this.fuel -= amount;
    }

    getFuelLevel() {
        return this.fuel;
    }

    setMaintenanceDate(date) {
        this.maintenanceDate = date;
    }

    getMaintenanceDate() {
        return this.maintenanceDate;
    }
}

`}
          </SyntaxHighlighter>
          <Text className="mt-1 font-bold">
            This class violates the SRP because it manages driving, fuel, and
            maintenance details of the vehicle, giving it multiple reasons to
            change.
          </Text>
          <Text className="mt-1">
            Using SRP we can refactor the class into multiple classes that have
            a single responsibility:
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
    }

    drive() {
        console.log({this.model} is driving);
    }
}

class FuelManager {
    constructor(vehicle) {
        this.vehicle = vehicle;
        this.fuel = 100;
    }

    refuel(amount) {
        this.fuel += amount;
    }

    consume(amount) {
        this.fuel -= amount;
    }

    getFuelLevel() {
        return this.fuel;
    }
}

class MaintenanceManager {
    constructor(vehicle) {
        this.vehicle = vehicle;
        this.maintenanceDate = null;
    }

    setMaintenanceDate(date) {
        this.maintenanceDate = date;
    }

    getMaintenanceDate() {
        return this.maintenanceDate;
    }
}
`}
          </SyntaxHighlighter>
          {/* TODO, Add modal with code when you click the buttons */}
          <SRPAnimation />
        </Box>
      )}
    </Box>
  );
};
