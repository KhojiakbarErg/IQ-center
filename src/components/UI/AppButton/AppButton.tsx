import React from "react";
import { ThemeAppButton, ThemeAppButtonTwo } from "./AppButton.style";
import { ThemeMoreInfBtn } from "./AppButton.style";

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

interface MoreInfBtnProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

export const MoreInfBtn = ({
  className,
  children,
  value,
  ...props
}: MoreInfBtnProps) => {
  return (
    <ThemeMoreInfBtn className={className} {...props}>
      {value} {children}
    </ThemeMoreInfBtn>
  );
};

interface AppButtonTwoProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

export const AppButtonTwo = ({
  className,
  children,
  value,
  ...props
}: AppButtonTwoProps) => {
  return (
    <ThemeAppButtonTwo className={className} {...props}>
      {value} {children}
    </ThemeAppButtonTwo>
  );
};
