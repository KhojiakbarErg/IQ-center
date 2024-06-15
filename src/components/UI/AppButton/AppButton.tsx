import React from "react";
import { ThemeAppButton, ThemeAppButtonTwo } from "./AppButton.style";
import { ThemeMoreInfBtn } from "./AppButton.style";
import { Link } from "react-router-dom";

interface AppButtonProps {
  value: string;
  className?: string;
  type?: any;
  to?: any;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onClick?: any;
}

export const AppButton = ({
  className,
  children,
  value,
  to,
  type,
  onClick,
  isDisabled,
  ...props
}: AppButtonProps) => {
  return (
    <Link to={to}>
      <ThemeAppButton
        className={className}
        onClick={onClick}
        type={type}
        disabled={isDisabled}
        {...props}
      >
        {value} {children}
      </ThemeAppButton>
    </Link>
  );
};

export const AppButtonNoLink = ({
  className,
  children,
  value,
  to,
  type,
  onClick,
  isDisabled,
  ...props
}: AppButtonProps) => {
  return (
    <ThemeAppButton
      className={className}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      {...props}
    >
      {value} {children}
    </ThemeAppButton>
  );
};

interface MoreInfBtnProps {
  value: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  to?: any;
  children?: React.ReactNode;
  onClick?: any;
  isDisabled?: boolean;
}

export const MoreInfBtn = ({
  className,
  children,
  value,
  to,
  type,
  onClick,
  isDisabled,
  ...props
}: MoreInfBtnProps) => {
  return (
    <ThemeMoreInfBtn
      className={className}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {value} {children}
    </ThemeMoreInfBtn>
  );
};

interface AppButtonTwoProps {
  value: string;
  className?: string;
  to?: any;
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
    <Link to={to}>
      <ThemeAppButtonTwo className={className} {...props}>
        {value} {children}
      </ThemeAppButtonTwo>
    </Link>
  );
};
