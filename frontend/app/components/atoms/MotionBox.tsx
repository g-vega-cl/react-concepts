import { Box, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Open for extension & shuts up eslint. This is an ESLint bug.
// because doing { children }: ButtonProps makes ESLint say that 
// ButtonProps is not used
interface IParallaxMotionBoxProps extends ButtonProps {}

export const MotionBox = motion(Box);

export const ParallaxMotionBox = ({ children }: IParallaxMotionBoxProps) => {
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
