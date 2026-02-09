import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

/* Shared base button */
export const BaseButton = styled(Button)({
  borderRadius: "999px",
  padding: "10px 20px",
  textTransform: "none",
  fontWeight: 600,
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
export const OutlineButton = styled(BaseButton)({
  color: "var(--color-primary)",
  border: "1px solid var(--color-primary)",

  "&:hover": {
    backgroundColor: "rgba(249, 115, 22, 0.08)",
  },

  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    color: "var(--color-primary)",
  },
});
