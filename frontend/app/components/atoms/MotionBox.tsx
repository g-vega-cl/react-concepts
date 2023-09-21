import { Box, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion(Box);

export const ParallaxMotionBox = ({ children }: ButtonProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionBox>
  );
};
