import React from "react";
import { ThemeAppButton, ThemeAppButtonTwo } from "./AppButton.style";
import { ThemeMoreInfBtn } from "./AppButton.style";
import { Link } from "react-router-dom";

interface AppButtonProps {
  value: string;
  className?: string;
  to?: any;
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
    <Link to={to}>
      <ThemeAppButton className={className} {...props}>
        {value} {children}
      </ThemeAppButton>
    </Link>
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
    <ThemeMoreInfBtn className={className} {...props}>
      {value} {children}
    </ThemeMoreInfBtn>
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
    <ThemeAppButtonTwo className={className} {...props}>
      {value} {children}
    </ThemeAppButtonTwo>
  );
};
