import { styled } from "@mui/material/styles";
import { Typography, List, ListItem, ListItemIcon } from "@mui/material";

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(4),
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  fontWeight: 600,
  color: theme.palette.primary.main,
  display: "block",
  [theme.breakpoints.up("md")]: {
    fontSize: "0.95rem",
  },
})) as typeof Typography;

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(2),
  fontSize: "1.4rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
})) as typeof Typography;

export const PageSectionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "var(--color-text-dark, #1f2937)",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(3),
  fontSize: "1.1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
})) as typeof Typography;

export const PageParagraph = styled(Typography)({
  fontSize: "1.05rem",
  lineHeight: 1.8,
  color: "var(--color-text-secondary, #6b7280)",
}) as typeof Typography;

export const StyledList = styled(List)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const StyledListItem = styled(ListItem)({
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: 0,
  paddingRight: 0,
});

export const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "32px",
});

export const PagePrimaryHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "var(--color-primary, #0066cc)",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
})) as typeof Typography;
