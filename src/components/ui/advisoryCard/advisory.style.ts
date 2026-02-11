import { styled, Card, Avatar, Typography } from "@mui/material";

/* Root card */
export const StyledCard = styled(Card)(() => ({
  borderRadius: 12,
  padding: 24,
  textAlign: "center",
  boxShadow: "0 0 0 1px #e5e7eb",
  height: "100%",
  backgroundColor: "#f9fafb",
}));

/* Avatar */
export const StyledAvatar = styled(Avatar)(() => ({
  width: 70,
  height: 70,
  margin: "0 auto 16px",
  backgroundColor: "#f97316",
}));

/* Name */
export const NameText = styled(Typography)(() => ({
  fontWeight: 600,
}));

/* Role */
export const RoleText = styled(Typography)(() => ({
  fontSize: 13,
  fontWeight: 600,
  color: "#f97316",
  marginTop: 4,
  marginBottom: 12,
}));

/* Description */
export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
}));
