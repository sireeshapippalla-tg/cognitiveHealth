import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

export const StyledSection = styled(Box)<{ $bgColor?: string }>(({ theme, $bgColor }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  backgroundColor: $bgColor || "#ffffff",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
})) as React.ComponentType<{ $bgColor?: string; component?: React.ElementType } & React.ComponentProps<typeof Box>>;

export const StyledFeatureImage = styled("img")({
  width: "auto",
  maxWidth: "100%",
  maxHeight: "140px",
  objectFit: "contain",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
}) as React.ComponentType<{ component?: React.ElementType } & React.ImgHTMLAttributes<HTMLImageElement>>;

export const StyledIconImage = styled("img")({
  width: "auto",
  maxHeight: "80px",
  objectFit: "contain",
  display: "block",
  marginLeft: 0,
  marginRight: 0,
  marginTop: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: "white",
  border: "1px solid var(--color-border, #e5e7eb)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
}) as React.ComponentType<{ component?: React.ElementType } & React.ImgHTMLAttributes<HTMLImageElement>>;

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(4),
  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
})) as typeof Typography;

export const StyledTitleSmall = styled(StyledTitle)(({ theme }) => ({
  fontSize: "1.4rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
})) as typeof Typography;

export const StyledLargeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(4),
  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
})) as typeof Typography;

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
})) as typeof Typography;

export const StyledSectionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(4),
  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.0rem",
  },
})) as typeof Typography;

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(3),
  fontSize: "1.1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
})) as typeof Typography;

export const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
  color: "var(--color-text-secondary, #6b7280)",
})) as typeof Typography;

export const StyledCardParagraph = styled(Typography)({
  fontSize: "1.05rem",
  lineHeight: 1.8,
  color: "var(--color-text-secondary, #6b7280)",
}) as typeof Typography;

// Custom styles for ScheduleDemoSection
export const StyledDemoContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "var(--color-bg-white, #ffffff)",
  padding: theme.spacing(4),
  borderRadius: "16px",
  border: "1px solid var(--color-border, #e5e7eb)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
})) as typeof Container;

export const StyledDemoButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "center",
})) as typeof Box;

export const StyledDemoButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: "8px",
  textTransform: "none",
  boxShadow: "0 4px 14px rgba(0, 102, 204, 0.3)",
})) as typeof Button;

export const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}) as typeof Box;

export const LogoNeuron = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "auto",
  objectFit: "contain",
  [theme.breakpoints.up("sm")]: {
    width: "150px",
  },
  [theme.breakpoints.up("md")]: {
    width: "240px",
  },
})) as typeof Box;

export const FlexGridItem = styled(Grid)({
  display: "flex",
}) as typeof Grid;

export const CardFlexWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "space-between",
}) as typeof Box;

export const CardActionGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "flex-start",
})) as typeof Box;

export const LearnMoreButton = styled(Button)({
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}) as typeof Button;
