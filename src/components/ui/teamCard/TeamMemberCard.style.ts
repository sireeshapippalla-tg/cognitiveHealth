import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar, IconButton } from "@mui/material";

export const CardContainer = styled(Box)({
  textAlign: "center",
});

export const ImageContainer = styled(Box)({
  position: "relative",
  width: 180,
  height: 180,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 16,
});

export const StyledAvatar = styled(Avatar)({
  width: 180,
  height: 180,
  transition: "0.4s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const ViewButton = styled(IconButton)({
  position: "absolute",
  bottom: 8,
  right: 8,
  width: 40,
  height: 40,
  background: "var(--color-white)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  "&:hover": {
    background: "var(--color-text-blue)",
    color: "var(--color-white)",
  },
});

export const NameText = styled(Typography)({
  fontWeight: 600,
  fontSize: 16,
});

export const RoleText = styled(Typography)({
  fontSize: 13,
  color: "#6b7280",
});
