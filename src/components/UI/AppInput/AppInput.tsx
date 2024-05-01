import React, { forwardRef, HTMLProps } from "react";
import { ThemeAppInput } from "./AppInput.style";

type AppInputProps = {
  type: "username" | "usersurname" | "tel" | "telegid" | "text";
  inputPlaceholder: string;
  name?: string;
  id?: string;
  isError?: boolean;
  errorText?: string;
  value?: any;
  onChange?: any;
};
export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput(
    {
      id,
      name,
      inputPlaceholder,
      type,
      isError,
      value,
      onChange,
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
          value={value}
          onChange={onChange}
          // isError={isError}
          ref={ref}
          {...props}
        />
        {/* <ThemeInputError isError={isError}>{errorText}</ThemeInputError> */}
      </>
    );
  }
);
