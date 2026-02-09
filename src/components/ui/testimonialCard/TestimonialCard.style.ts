// import { Box, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

// export const CardWrapper = styled(Box)({
//   backgroundColor: "#fff7ed",
//   borderRadius: "24px",
//   padding: "40px",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// });

// export const QuoteText = styled(Typography)({
//   fontSize: "16px",
//   color: "#4b5563",
//   lineHeight: 1.8,
//   marginBottom: "32px",
// });

// export const AuthorName = styled(Typography)({
//   color: "#ea580c",
//   fontWeight: 700,
//   fontSize: "16px",
//   marginBottom: "4px",
// });

// export const RoleText = styled(Typography)({
//   color: "#9ca3af",
//   fontSize: "14px",
// });

// export const CompanyText = styled(Typography)({
//   color: "#6b7280",
//   fontSize: "14px",
//   fontWeight: 500,
// });


import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardWrapper = styled(Box)({
  backgroundColor: "#fff7ed",
  borderRadius: "20px",
  padding: "32px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const QuoteText = styled(Typography)({
  fontSize: "15px",
  color: "#374151",
  lineHeight: 1.7,
  marginBottom: "32px",
});

export const Footer = styled(Box)({
  marginTop: "auto",
});

export const Divider = styled(Box)({
//   width: "32px",
  height: "1px",
  backgroundColor: "gray",
  marginBottom: "12px",
});

export const AuthorName = styled(Typography)({
  color: "#f97316",
  fontWeight: 600,
  fontSize: "14px",
  marginBottom: "4px",
});

export const RoleText = styled(Typography)({
  color: "#9ca3af",
  fontSize: "13px",
  marginBottom: "2px",
});

export const CompanyText = styled(Typography)({
  color: "#6b7280",
  fontSize: "13px",
});
