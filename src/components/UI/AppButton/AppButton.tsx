import React, { ButtonHTMLAttributes, ChangeEvent, MouseEventHandler, } from "react";
import { ThemeAppButton, ThemeAppButtonTwo } from "./AppButton.style";
import { ThemeMoreInfBtn } from "./AppButton.style";
import { Link } from "react-router-dom";
import { clickOptions } from "@testing-library/user-event/dist/click";

interface AppButtonProps {
  value: string;
  className?: string;
  type?: any;
  to?: any;
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
  ...props
}: AppButtonProps) => {
  return (
    <Link to={to}>
      <ThemeAppButton
        className={className}
        onClick={onClick}
        type={type}
        {...props}
      >
        {value} {children}
      </ThemeAppButton>
    </Link>
  );
};

interface MoreInfBtnProps {
  value: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  to?: string;
  children?: React.ReactNode;
  onClick?: any;
}

export const MoreInfBtn = ({
  className,
  children,
  value,
  to,
  type,
  onClick,
  ...props
}: MoreInfBtnProps) => {
  return (
    <ThemeMoreInfBtn className={className} type={type} onClick={onClick} {...props}>
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
