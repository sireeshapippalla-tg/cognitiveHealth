import { Box, Button, Typography, styled } from "@mui/material";


export const DashboardOuter = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#2563eb",
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "stretch",
  },
}));
export const DashboardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "760px",
  padding: "24px",
  borderRadius: "28px",
  backgroundColor: "#2563eb",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",     
    borderRadius: "0",     
    padding: "16px",       
  },
}));




export const DashboardGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const CardHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const CardTitle = styled(Typography)({
  fontSize: "13px",
  fontWeight: 600,
});

export const IconWrapper = styled(Box)({
  padding: "4px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MetricWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const MetricValue = styled(Typography)({
  fontSize: "18px",
  fontWeight: 800,
  color: "#111827",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
});

export const ChartContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "16px",
  height: "160px",
  marginTop: "16px",
});

export const YAxis = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: "20px", 
  textAlign: "right",
});

export const YAxisLabel = styled(Typography)({
  fontSize: "10px",
  color: "#9ca3af", 
  lineHeight: 1,
});

export const ChartArea = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
});

export const GridLine = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  borderTop: "1px dashed #e5e7eb", 
  width: "100%",
});

export const BarsContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "12px",
  height: "100%",
  alignItems: "flex-end",
  zIndex: 1,
});

export const XAxis = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "12px",
  marginTop: "8px",
  paddingLeft: "40px",
});

export const XAxisLabel = styled(Typography)({
  fontSize: "9px",
  color: "#9ca3af",
  textAlign: "center",
});

export const PaybackHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AIButton = styled(Button)({
  marginTop: 2,
  color: "#1f2937",
  fontSize: "17px",
  borderColor: "#e5e7eb",
  textTransform: "none",
  borderRadius: "8px",
  fontWeight: 800,
  bgcolor: "#f9fafb",
  "&:hover": {
    bgcolor: "#f3f4f6",
    borderColor: "#d1d5db",
  },
});
