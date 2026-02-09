import { type ButtonProps } from "@mui/material";
import React from "react";
import { OutlineButton, PrimaryButton } from "./AppButton.styles";



type AppButtonProps = ButtonProps & {
  variantType?: "primary" | "outline";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const AppButton = ({
  variantType = "primary",
  startIcon,
  endIcon,
  ...props
}: AppButtonProps) => {
  const ButtonComponent =
    variantType === "primary" ? PrimaryButton : OutlineButton;

  return (
    <ButtonComponent
      {...props}
      variant={variantType === "primary" ? "contained" : "outlined"}
      disableElevation
      startIcon={startIcon}
      endIcon={endIcon}
    />
  );
};

export default AppButton;
