import React from "react";
import { ThemeAppButton } from "./AppButton.style";

interface AppButtonProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

export const AppButton = ({
  className,
  children,
  value,
  ...props
}: AppButtonProps) => {
  return (
    <ThemeAppButton className={className} {...props}>
      {value} {children}
    </ThemeAppButton>
  );
};
