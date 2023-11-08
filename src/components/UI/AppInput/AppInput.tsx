import React from "react";
import { ThemeInputMain } from "./AppInput.style";

type AppInputMainProps = {
  type: "tel" | "password" | "username_usersurname" | "text" | "search";
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
}: AppInputMainProps) => {
  return (
    <ThemeInputMain
      className="app__input"
      id={id}
      name={name}
      type={type}
      placeholder={inputPlaceholder}
      {...props}
    ></ThemeInputMain>
  );
};
