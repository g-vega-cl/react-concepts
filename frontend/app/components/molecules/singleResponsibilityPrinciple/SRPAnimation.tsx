import React from "react";
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const buttonClass =
  "bg-pink-300 h-12 flex justify-center items-center rounded";
const textClass = "text-white font-bold";
{/* TODO, Add modal with code when you click the buttons */}
export const SRPAnimation: React.FC = () => {
  return (
    <Box className="grid my-8" style={{ gridTemplateRows: "1fr" }}>
      <Box className="mb-4">
        {/* TODO, We are not using framer motion, but we want to eventually */}
        <motion.div className={buttonClass}>
          <Text className={textClass}>Vehicle</Text>
        </motion.div>
      </Box>
      <Box className="mb-2 grid grid-cols-3">
        <ArrowDownIcon boxSize={8} className="m-auto text-violet-900" />
        <ArrowDownIcon boxSize={8} className="m-auto text-violet-900" />
        <ArrowDownIcon boxSize={8} className="m-auto text-violet-900" />
      </Box>
      <Box className="p-4 gap-8 grid grid-cols-1 md:grid-cols-3 border-solid border">
        <motion.div className={buttonClass}>
          <Text className={textClass}>FuelManager</Text>
        </motion.div>
        <motion.div className={buttonClass}>
          <Text className={textClass}>MaintenanceManager</Text>
        </motion.div>
        <motion.div className={buttonClass}>
          <Text className={textClass}>Vehicle</Text>
        </motion.div>
      </Box>
    </Box>
  );
};
