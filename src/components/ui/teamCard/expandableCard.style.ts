import { styled, Card, Box, Avatar, Typography, IconButton } from "@mui/material";

/* Root card */
export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "iscapability",
})<{ open?: boolean; iscapability?: boolean }>(({ open, iscapability }) => ({
  borderRadius: 12,
  padding: 16,
  transition: "0.3s",
  boxShadow: "0 0 0 1px #e5e7eb",
  border: open && iscapability ? "1px solid #f97316" : "1px solid #e5e7eb",
}));

/* Header row */
export const HeaderRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
}));

/* Capability icon box */
export const CapabilityIcon = styled(Box)(() => ({
  width: 44,
  height: 44,
  borderRadius: 8,
  background: "#3b82f6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

/* Avatar */
export const MemberAvatar = styled(Avatar)(() => ({
  width: 56,
  height: 56,
}));

/* Title */
export const TitleText = styled(Typography)(() => ({
  fontWeight: 600,
}));

/* Subtitle */
export const SubtitleText = styled(Typography)(() => ({
  fontSize: 14,
  color: "#f97316",
  fontWeight: 500,
}));

/* Expand icon */
export const ExpandButton = styled(IconButton)(() => ({
  transition: "0.3s",
}));

/* Description */
export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
}));
