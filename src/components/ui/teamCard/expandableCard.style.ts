import { styled, Box, Typography, IconButton } from "@mui/material";

// /* Root card */
// export const StyledCard = styled(Card, {
//   shouldForwardProp: (prop) => prop !== "open" && prop !== "iscapability",
// })<{ open?: boolean; iscapability?: boolean }>(({ open, iscapability }) => ({
//   borderRadius: 12,
//   padding: 16,
//   transition: "0.3s",
//   boxShadow: "0 0 0 1px #e5e7eb",
//   border: open && iscapability ? "1px solid -var(--color-primary)" : "1px solid #e5e7eb",
// }));

// /* Header row */
// export const HeaderRow = styled(Box)(() => ({
//   display: "flex",
//   alignItems: "center",
//   gap: 16,
// }));

// /* Capability icon box */
// export const CapabilityIcon = styled(Box)(() => ({
//   width: 40,
//   height: 40,
//   borderRadius: 8,
//   background: "#3b82f6",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
// }));

// /* Avatar */
// export const MemberAvatar = styled(Avatar)(() => ({
//   width: 56,
//   height: 56,
// }));

// /* Title */
// export const TitleText = styled(Typography)(() => ({
//   fontWeight: 600,
// }));

// /* Subtitle */
// export const SubtitleText = styled(Typography)(() => ({
//   fontSize: 14,
//   color: "-var(--color-primary)",
//   fontWeight: 500,
// }));

// /* Expand icon */
// export const ExpandButton = styled(IconButton)(() => ({
//   transition: "0.3s",
// }));

// /* Description */
// export const DescriptionText = styled(Typography)(({ theme }) => ({
//   fontSize: 16,
//   color: theme.palette.text.secondary,
//   lineHeight: 1.7,
// }));

export const CardWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open }) => ({
  marginBottom: "12px",
  overflow: "hidden",
  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  background: open ? "rgba(244, 122, 32, 0.05)" : "transparent",
  borderRadius: "32px",
  border: "1px solid",
  borderColor: open ? "rgba(244, 122, 32, 0.3)" : "rgba(0, 0, 0, 0.06)",
  padding: "16px",
  position: "relative",

  "&:hover": {
    borderColor: open ? "rgba(244, 122, 32, 0.4)" : "rgba(107, 191, 89, 0.4)",
    background: open ? "rgba(244, 122, 32, 0.07)" : "rgba(0, 0, 0, 0.02)",
  },

  "@media (min-width:900px)": {
    padding: "20px",
  },
}));

export const Header = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  userSelect: "none",

  "@media (min-width:900px)": {
    gap: "28px",
  },
}));

export const IconCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  width: "54px",
  height: "54px",
  borderRadius: "30%",
  background: open ? "#F47A20" : "rgba(107, 191, 89, 0.15)",
  color: open ? "#fff" : "#6BBF59",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.4s ease",
  transform: open ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
  flexShrink: 0,
  boxShadow: open ? "0 15px 30px rgba(244,122,32,0.2)" : "none",

  "& svg": {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    "& svg": {
      fontSize: "1.5rem",
    },
    width: "40px",
    height: "40px",
  },
}));

export const IconImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "30%",
  objectFit: "cover",
});

export const CardTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  fontWeight: 900,
  color: open ? "#F47A20" : "#111827",
  transition: "color 0.4s ease",
  fontSize: "1rem",
  letterSpacing: "-0.02em",
  lineHeight: 1.2,

  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

export const CardSubtitle = styled(Typography)(() => ({
  color: "#6B7280",
  fontWeight: 750,
  fontSize: "0.9rem",
  marginTop: "4px",
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const ExpandBtn = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  width: "48px",
  height: "48px",
  background: open ? "#111827" : "rgba(0,0,0,0.04)",
  color: open ? "#fff" : "#111827",
  borderRadius: "16px",
  transition: "all 0.4s ease",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",

  "&:hover": {
    background: open ? "#000" : "rgba(0,0,0,0.1)",
  },
  [theme.breakpoints.down("md")]: {
    width: "38px",
    height: "38px",
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  paddingTop: "8px",
  paddingBottom: "16px",

  [theme.breakpoints.up("md")]: {
    paddingLeft: "92px",
    paddingRight: "32px",
  },
}));

export const Description = styled(Typography)(() => ({
  color: "#4B5563",
  fontSize: "1.125rem",
  lineHeight: 1.7,
  fontWeight: 500,
}));

export const CollapseContent = styled(Box)(({ theme }) => ({
  paddingTop: "8px",
  paddingBottom: "16px",

  [theme.breakpoints.up("md")]: {
    paddingLeft: "92px", // 11.5 * 8 = 92px
    paddingRight: "32px", // 4 * 8 = 32px
  },
}));

export const DescriptionText = styled(Typography)(() => ({
  color: "#4B5563",
  fontSize: "1.125rem",
  lineHeight: 1.7,
  fontWeight: 500,
}));

export const RichContent = styled(Box)(() => ({
  "& p, & li, & span": {
    color: "#4B5563",
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.7,
  },

  "& ul": {
    paddingLeft: "24px",
    marginTop: "12px",
  },
}));
