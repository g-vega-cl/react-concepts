import { ToggleOpenPinkButton } from "@/app/components/molecules";
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react";

export const Coupling = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Box>
            <Flex className="gap-4 align-center mt-3  justify-between">
                <Heading as="h2" size="lg">
                    Coupling
                </Heading>
                <ToggleOpenPinkButton isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Flex>
            {isOpen && (
                <Text className="mt-1">
                    Coupling refers to the degree of interdependence between different
                    modules or classes in a system.
                    High coupling means that changes in one module may require
                    changes in many other modules, making the codebase more difficult
                    to maintain and modify. It is generally recommended to
                    minimize coupling by using loose coupling techniques such as
                    dependency injection and interfaces.
                </Text>
            )}

        </Box>
    )

     {/* Separate files example */}
            {/* Prop drilling */}
            {/* Nit about data fetching I think data should be close*/}
            {/* Components Relying on Global Variables - Also nit */}
                {/* But don't over-rely on context */}
}