import React, { useMemo } from 'react';
import { Button, ButtonProps } from "@chakra-ui/react";
import classNames from "classnames";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg", 
}

export interface IPinkButton extends ButtonProps {
  buttonSize?: ButtonSize;
}

export const PinkButton: React.FC<IPinkButton> = ({ className, children, buttonSize, ...props }) => {
  const buttonSizeClass = useMemo(() => {
    switch (buttonSize) {
      case "sm":
        return "w-20";
      case "md":
        return "w-32";
      case "lg":
        return "w-40";
      default:
        return "w-20";
    }
  }, [buttonSize]);
  return (
    <Button
      {...props}
      className={classNames("text-sm font-bold bg-pink-500 text-white hover:bg-pink-400 p-2", buttonSizeClass, className)}
    >
      {children}
    </Button>
  );
};
