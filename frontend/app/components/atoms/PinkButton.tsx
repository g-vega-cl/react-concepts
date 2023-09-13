import React from 'react';
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PinkButton: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={classNames("text-sm font-bold bg-pink-500 text-white hover:bg-pink-400", className)}
    >
      {children}
    </button>
  );
};
