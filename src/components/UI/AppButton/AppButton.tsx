import React from "react";
import { ThemeAppButton, ThemeAppButtonTwo } from "./AppButton.style";
import { ThemeMoreInfBtn } from "./AppButton.style";

interface AppButtonProps {
  value: string;
  className?: string;
  to?: string;
  children?: React.ReactNode;
}

export const AppButton = ({
  className,
  children,
  value,
  to,
  ...props
}: AppButtonProps) => {
  return (
    <a href={to}>
      <ThemeAppButton className={className} {...props}>
        {value} {children}
      </ThemeAppButton>
    </a>
  );
};

interface MoreInfBtnProps {
  value: string;
  className?: string;
  to?: string;
  children?: React.ReactNode;
}

export const MoreInfBtn = ({
  className,
  children,
  value,
  to,
  ...props
}: MoreInfBtnProps) => {
  return (
    <a href={to}>
      <ThemeMoreInfBtn className={className} {...props}>
        {value} {children}
      </ThemeMoreInfBtn>
    </a>
  );
};

interface AppButtonTwoProps {
  value: string;
  className?: string;
  to?: string;
  children?: React.ReactNode;
}

export const AppButtonTwo = ({
  className,
  children,
  value,
  to,
  ...props
}: AppButtonTwoProps) => {
  return (
    <a href="to">
      <ThemeAppButtonTwo className={className} {...props}>
        {value} {children}
      </ThemeAppButtonTwo>
    </a>
  );
};
