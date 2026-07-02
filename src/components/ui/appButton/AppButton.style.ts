import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

interface OutlineButtonProps {
  showBorder?: boolean;
}
/* Shared base button */
export const BaseButton = styled(Button)({
  borderRadius: "999px",
  padding: "10px 20px",
  textTransform: "none",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

/* Primary button */
export const PrimaryButton = styled(BaseButton)({
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",

  "&:hover": {
    backgroundColor: "var(--color-primary-hover)",
  },

  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    color: "var(--color-white)",
  },
});

/* Outline button */
export const OutlineButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "showBorder",
})<OutlineButtonProps>(({ showBorder }) => ({
  color: "#2F2F2F",
  border: showBorder ? "1px solid #2F2F2F" : "none",
  borderRadius: "999px",
  padding: "10px 20px",
  textTransform: "none",
  fontWeight: 600,
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "rgba(249, 115, 22, 0.08)",
  },

  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    color: "#2F2F2F",
  },
}));
