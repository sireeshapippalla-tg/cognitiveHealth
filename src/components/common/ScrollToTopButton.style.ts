import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const StyledIconButton = styled(IconButton)({
  width: 56,
  height: 56,
  background: "var(--color-primary)",
  color: "var(--color-white)",
  boxShadow: "0 10px 25px rgba(235, 123, 51, 0.4)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    background: "var(--color-primary-hover)",
    transform: "translateY(-3px)",
    boxShadow: "0 15px 30px rgba(235, 123, 51, 0.5)",
  },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const StyledArrowIcon = styled(KeyboardArrowUpIcon)({
  fontSize: 32,
});
