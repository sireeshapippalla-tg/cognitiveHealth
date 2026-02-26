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
  backgroundColor: "#FFF7F2",
  borderRadius: "20px",
  border: "1px solid #ECECEC",
  justifyContent: "space-between",
  padding: "24px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",

  "&:hover": {

    transform: "translateY(-4px)",
    borderColor: "transparent",
    "& .read-more-link": {
      color: "#E88D3E", // Orange
 
    },
  }
});

export const QuoteText = styled(Typography)({
  // fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "18px",
  color: "#0E151B",
  lineHeight: '130%',
  marginBottom: "32px",
  textAlign:"left"
});

export const Footer = styled(Box)({
  marginTop: "auto",
});

export const Divider = styled(Box)({
//   width: "32px",
  height: "1px",
  backgroundColor: "#ECECEC",
  marginBottom: "12px",
  border: "1px solid #ECECEC",
});

export const AuthorName = styled(Typography)({
  // fontFamily: "Inter",
  color: "#EB7724",
  fontWeight: 500,
  fontSize: "18px",
  marginBottom: "4px",
  lineHeight: "130%",
  textAlign:"left"
});

export const RoleText = styled(Typography)({
  color: "#9ca3af",
  fontSize: "13px",
  marginBottom: "2px",
 
});

export const CompanyText = styled(Typography)({
  // fontFamily: "Inter",
  fontWeight: 400,
  color: "#2F2F2F",
  fontSize: "16px",
  textAlign:"left"
});
