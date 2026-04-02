import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

/* ================= HERO ================= */

export const HeroSection = styled(Box)(({ theme }) => ({
  background: "var(--color-text-blue)",
  padding: "80px 20px",
  color: "var(--color-white)",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    padding: "60px 16px",
  },
}));

export const HeroInner = styled(Box)({
  maxWidth: "900px",
  margin: "0 auto",
});

export const HeroTitle = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
});

export const HeroSubtitle = styled(Typography)({
  marginTop: "16px",
  fontSize: "18px",
  opacity: 0.9,
});
export const UpdatedBadge = styled(Box)({
  display: "inline-block",
  marginTop: "20px",
  backgroundColor: "-var(--color-primary)",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "14px",
});

/* ================= CONTENT ================= */

export const ContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  padding: "60px 80px",

  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
  },
}));

export const ContentInner = styled(Box)({
  // maxWidth: "900px",
  margin: "0 auto",
});

export const PageTitle = styled(Typography)({
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "8px",
});

export const UpdatedText = styled(Typography)({
  color: "var(--color-gray-500)",
  marginBottom: "48px",
});

export const SectionBlock = styled(Box)({
  marginBottom: "48px",
});

export const SectionTitle = styled(Typography)({
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: "16px",
});

export const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--color-gray-600)",
  marginBottom: "16px",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  whiteSpace: "normal",
  "& a": {
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },
});

/* ================= LIST STYLES ================= */

export const StyledList = styled("ul")({
  paddingLeft: "20px",
  marginBottom: "16px",
});

export const StyledListItem = styled("li")({
  marginBottom: "10px",
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--color-gray-600)",
});
