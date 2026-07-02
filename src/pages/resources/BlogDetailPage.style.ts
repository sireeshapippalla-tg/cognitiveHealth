import { styled } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const BlogDetailWrapper = styled(Box)({
  backgroundColor: "var(--color-white)",
  minHeight: "100vh",
});

export const BlogContent = styled(Container)({
  padding: "80px 24px",
  maxWidth: "1200px",
});

export const Breadcrumb = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  color: "#666",
  marginBottom: "24px",
  padding: "12px 0",
  borderBottom: "1px solid #e0e0e0",
  "& span": {
    margin: "0 8px",
    color: "#999",
  },
});

export const BreadcrumbLink = styled(RouterLink)({
  color: "#0066cc",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#004499",
    textDecoration: "underline",
  },
});

export const BlogHeader = styled(Box)({
  marginBottom: "48px",
});

export const BlogImage = styled("img")({
  width: "100%",
  maxWidth: "800px",
  height: "auto",
  borderRadius: "12px",
  marginBottom: "32px",
  objectFit: "cover",
});

export const BlogTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: 700,
  marginBottom: "16px",
  color: "var(--color-text-primary)",
  lineHeight: 1.3,
  "@media (max-width: 768px)": {
    fontSize: "32px",
    lineHeight: 1.3,
  },
});

export const BlogDate = styled(Typography)({
  fontSize: "14px",
  color: "var(--color-text-secondary)",
  marginBottom: "8px",
  fontWeight: 500,
});

export const Author = styled(Typography)({
  fontSize: "14px",
  color: "var(--color-text-secondary)",
  marginBottom: "24px",
});

export const BlogDescription = styled(Typography)({
  fontSize: "18px",
  lineHeight: 1.8,
  color: "var(--color-text-primary)",
  marginBottom: "24px",
});

export const SectionTitle = styled(Typography)({
  fontSize: "28px",
  fontWeight: 600,
  marginTop: "48px",
  marginBottom: "16px",
  color: "var(--color-text-primary)",
  "@media (max-width: 768px)": {
    fontSize: "24px",
  },
});

export const SectionContent = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--color-text-primary)",
  marginBottom: "16px",
});

export const Highlight = styled("strong")({
  color: "#0066cc",
  fontWeight: 600,
});

export const OutcomeList = styled("ul")({
  listStyle: "none",
  padding: 0,
  marginBottom: "24px",
  "& li": {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "var(--color-text-primary)",
    marginBottom: "8px",
    paddingLeft: "24px",
    position: "relative",
    "&:before": {
      content: '"•"',
      position: "absolute",
      left: 0,
      color: "#0066cc",
      fontWeight: "bold",
    },
  },
});

export const InlineImageContainer = styled(Box)({
  margin: "32px 0",
  textAlign: "center",
});

export const InlineImage = styled("img")({
  width: "100%",
  maxWidth: "800px",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
});

export const ImageCaption = styled(Typography)({
  fontSize: "14px",
  color: "var(--color-text-secondary)",
  marginTop: "8px",
  fontStyle: "italic",
});

export const ExternalLinkButton = styled("a")({
  display: "inline-block",
  backgroundColor: "#0066cc",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: 600,
  marginTop: "16px",
  marginBottom: "32px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#004499",
  },
});

export const StyledResourceLink = styled(RouterLink)({
  color: "#0066cc",
  textDecoration: "none",
  fontWeight: 600,
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#004499",
    textDecoration: "underline",
  },
});

export const StyledExternalLinkText = styled("a")({
  color: "#0066cc",
  textDecoration: "none",
  fontWeight: 600,
  transition: "color 0.2s ease",
  display: "inline-block",
  "&:hover": {
    color: "#004499",
    textDecoration: "underline",
  },
});

export const SectionTitleSmall = styled(SectionTitle)({
  fontSize: "22px",
  marginTop: "32px",
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
});

export const SectionContentWithMargin = styled(SectionContent)<{ $mt?: number; $mb?: number }>(({ $mt, $mb }) => ({
  marginTop: $mt !== undefined ? `${$mt * 8}px` : undefined,
  marginBottom: $mb !== undefined ? `${$mb * 8}px` : undefined,
}));

export const ReadMoreWrapper = styled(Box)({
  marginTop: "16px",
  marginBottom: "32px",
});

export const CenteredImageContainer = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
  display: "flex",
  justifyContent: "center",
});

export const ThreatImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
});

export const AuthorImage = styled("img")({
  maxWidth: "200px",
  borderRadius: "50%",
});

export const ItalicInfoText = styled(SectionContent)({
  fontStyle: "italic",
  color: "#666",
  marginTop: "16px",
});

export const ItalicSourceText = styled(SectionContent)({
  fontStyle: "italic",
  color: "#666",
  marginTop: "32px",
});

export const MarginContainer = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
});
