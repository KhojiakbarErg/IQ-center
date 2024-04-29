import React from "react";
import { ThemeAppInput } from "./AppInput.style";

type AppInputProps = {
  type: "tel" | "username" | "usersurname" | "teg";
  inputPlaceholder: string;
  name?: string;
  id?: string;
  className?: string;
  onKeyUp?: any;
  onClick?: any;
};

export const AppInput = ({
  id,
  name,
  inputPlaceholder,
  type,
  className,
  onKeyUp,
  onClick,
  ...props
}: AppInputProps) => {
  return (
    <ThemeAppInput
      id={id}
      name={name}
      type={type}
      placeholder={inputPlaceholder}
      {...props}
    ></ThemeAppInput>
  );
};
