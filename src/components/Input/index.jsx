import React from "react";
import { StyledInput } from "./style";

export const Input = ({ type, register, placeholder, disabled }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register}
    />
  );
};
