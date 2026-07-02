import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Table = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "32px",
  backgroundColor: "#fff",
});

export const TableHeader = styled("th")({
  backgroundColor: "#f5f5f5",
  padding: "16px",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--color-text-primary)",
  borderBottom: "2px solid #e0e0e0",
});

export const TableRow = styled("tr")({
  "&:nth-of-type(even)": {
    backgroundColor: "#f9f9f9",
  },
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

export const TableCell = styled("td")({
  padding: "16px",
  borderBottom: "1px solid #e0e0e0",
  fontSize: "14px",
  color: "var(--color-text-primary)",
});

export const HighlightBox = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
  padding: "32px",
  backgroundColor: "#f5f7fa",
  borderRadius: "12px",
  borderLeft: "6px solid #0066cc",
});

export const QuoteText = styled(Typography)({
  fontStyle: "italic",
  marginBottom: "16px",
  color: "#333",
});

export const QuoteAuthor = styled(Typography)({
  fontWeight: 600,
  color: "#0066cc",
});

export const QuoteBoxGreen = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
  padding: "32px",
  backgroundColor: "#f8fafd",
  borderRadius: "0 12px 12px 0",
  borderLeft: "6px solid #4caf50",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const QuoteTitleBlue = styled(Typography)({
  color: "#0066cc",
  fontWeight: 600,
  zIndex: 1,
});

export const BigQuoteMark = styled(Typography)({
  fontSize: "120px",
  fontWeight: 900,
  color: "#e2edf8",
  position: "absolute",
  right: "20px",
  top: "-20px",
  lineHeight: 1,
  userSelect: "none",
});

export const VideoEmbedContainer = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
  position: "relative",
  paddingTop: "56.25%",
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  borderRadius: "12px",
  overflow: "hidden",
});

export const AudioEmbedContainer = styled(Box)({
  marginTop: "32px",
  marginBottom: "32px",
  width: "100%",
  height: "166px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  borderRadius: "12px",
  overflow: "hidden",
});

export const OutcomeListDecimal = styled("ol")({
  paddingLeft: "24px",
  marginBottom: "24px",
  "& li": {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "var(--color-text-primary)",
    marginBottom: "8px",
  },
});
