import { type ButtonProps } from "@mui/material";
import React from "react";
import { OutlineButton, PrimaryButton } from "./AppButton.styles";



type AppButtonProps = ButtonProps & {
  variantType?: "primary" | "outline";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  showBorder?:boolean;
};

const AppButton = ({
  variantType = "primary",
  startIcon,
  endIcon,
  showBorder,
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
      showBorder={showBorder}
    />
  );
};

export default AppButton;
