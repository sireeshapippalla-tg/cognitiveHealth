import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

export const AccordionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0px",
});

export const AccordionItem = motion.create(
  styled(Box, {
    shouldForwardProp: (prop) => prop !== "$expanded",
  })<{ $expanded?: boolean }>(({ $expanded }) => ({
    backgroundColor: "transparent",
    borderBottom: "1px solid",
    borderColor: $expanded
      ? "rgba(235, 123, 51, 0.2)"
      : "var(--color-border-light)",
    transition: "all 0.3s ease",
  }))
);

export const AccordionHeader = styled(Box)<{ $expanded?: boolean }>(
  ({ $expanded }) => ({
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    cursor: "pointer",
    userSelect: "none",
    "&:hover .faq-title": {
      color: "var(--color-primary)",
    },
    "&:hover .faq-icon": {
      color: "var(--color-primary)",
      transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
    },
  })
);

export const SectionTitle = styled(Typography)<{ $expanded?: boolean }>(
  ({ $expanded }) => ({
    fontSize: "20px",
    fontWeight: 500,
    color: $expanded ? "var(--color-primary)" : "var(--color-text-dark)",
    lineHeight: 1.5,
    transition: "color 0.3s ease",
  })
);

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$expanded",
})<{ $expanded?: boolean }>(({ $expanded }) => ({
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
  color: $expanded ? "var(--color-primary)" : "var(--color-text-muted)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  marginTop: "2px",
}));

export const AccordionContent = styled(motion.div)({
  overflow: "hidden",
});

export const SectionBlock = styled(Box)({
  padding: "0 0 40px 0",
  maxWidth: "90%",
});

export const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--color-text-muted)",
  "& a": {
    color: "var(--color-text-blue)",
    textDecoration: "none",
    fontWeight: 500,
    borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
    transition: "all 0.3s ease",
    "&:hover": {
      borderBottomColor: "var(--color-text-blue)",
    },
  },
  "& strong": {
    fontWeight: 600,
    color: "var(--color-text-dark)",
  },
});

export const ListParagraph = styled(Box)({
  "& ul": {
    listStyleType: "none",
    paddingLeft: 0,
    marginTop: "16px",
    marginBottom: "24px",
  },
  "& li": {
    position: "relative",
    paddingLeft: "28px",
    marginBottom: "16px",
    fontSize: "16px",
    lineHeight: 1.8,
    color: "var(--color-text-muted)",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "10px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "var(--color-green)",
    },
    "& strong": {
      fontWeight: 600,
      color: "var(--color-text-dark)",
    },
  },
});

export const NoResults = styled(motion.div)({
  textAlign: "center",
  padding: "80px 20px",
  color: "var(--color-text-muted)",
  fontSize: "18px",
});

export const CategoryBadge = styled(Box)({
  fontSize: "12px",
  fontWeight: 600,
  color: "var(--color-primary-dark)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: "8px",
});

export const BlockHeading = styled(Typography)({
  marginTop: "24px",
  marginBottom: "16px",
  fontWeight: 500,
  color: "var(--color-gray-900)",
  fontSize: "18px",
});

export const StyledSearchIcon = styled(SearchIcon)({
  color: "var(--color-text-muted)",
  marginRight: "8px",
  fontSize: "24px",
});

export const TermsParagraph = styled(Paragraph)({
  marginBottom: "16px",
});

export const ParagraphWithMarginTop = styled(Paragraph)({
  marginTop: "16px",
});
