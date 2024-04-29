import React, { forwardRef, HTMLProps } from "react";
import { ThemeAppInput } from "./AppInput.style";

type AppInputProps = {
  type: "username" | "usersurname" | "tel" | "telegid";
  inputPlaceholder: string;
  name?: string;
  id?: string;
  isError?: boolean;
  errorText?: string;
};
export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput(
    {
      id,
      name,
      inputPlaceholder,
      type,
      isError,
      errorText,
      ...props
    }: AppInputProps & HTMLProps<HTMLInputElement>,
    ref
  ) {
    return (
      <>
        <ThemeAppInput
          id={id}
          name={name}
          type={type}
          placeholder={inputPlaceholder}
          // isError={isError}
          ref={ref}
          {...props}
        />
        {/* <ThemeInputError isError={isError}>{errorText}</ThemeInputError> */}
      </>
    );
  }
);
