// import { Box, Typography, Button, TextField } from "@mui/material";
// import { styled } from "@mui/material/styles";

// export const Wrapper = styled(Box)(({ theme }) => ({
//   // maxWidth: 1200,
//   margin: "0 auto",
//   padding: "30px 80px",

//   [theme.breakpoints.down("md")]: {
//     padding: "48px 16px",
//   },
// }));

// export const OuterCard = styled(Box)(() => ({
//   backgroundColor: "#f5f5f5",
//   borderRadius: 28,
//   padding: "0",
//   overflow: "hidden",
//   position: "relative",
// }));

// /* ORANGE HEADER STRIP */
// export const HeaderStrip = styled(Box)(({ theme }) => ({
//   backgroundColor: "#f27c22",
//   padding: "20px 40px",
//   color: "#ffffff",

//   [theme.breakpoints.down("md")]: {
//     padding: "36px 24px",
//   },
// }));


// export const HeaderTitle = styled(Typography)({
//   fontSize: 26,
//   fontWeight: 700,
//   marginBottom: 6,
// });

// export const HeaderSubtitle = styled(Typography)({
//   fontSize: 14,
//   opacity: 0.95,
//   marginTop:100
// });

// /* CONTENT AREA */
// export const Content = styled(Box)(({ theme }) => ({
//   position: "relative",
//   display: "grid",
//   gridTemplateColumns: "1.2fr 1fr",
//   gap: "40px",
//   padding: "48px",

//   [theme.breakpoints.down("md")]: {
//     gridTemplateColumns: "1fr",
//     padding: "32px 24px",
//   },
// }));


// /* LEFT INFO */
// export const Info = styled(Box)({});

// export const InfoBlock = styled(Box)({
//   marginBottom: 24,
// });

// export const InfoLabel = styled(Typography)({
//   fontSize: 13,
//   color: "#6b7280",
//   marginBottom: 4,
// });

// export const InfoValue = styled(Typography)({
//   fontSize: 14,
//   fontWeight: 600,
//   color: "#111827",
// });

// /* FORM CARD */
// export const FormCard = styled(Box)(({ theme }) => ({
//   backgroundColor: "#ffffff",
//   borderRadius: 20,
//   padding: "28px",
//   boxShadow: "0 12px 40px rgba(0,0,0,0.08)",

//   marginTop: "-220px",

//   [theme.breakpoints.down("md")]: {
//     marginTop: "0", 
//     padding: "24px",
//   },
// }));


// export const StyledInput = styled(TextField)({
//   marginBottom: 16,
// });

// export const SubmitButton = styled(Button)({
//   backgroundColor: "#f27c22",
//   color: "#ffffff",
//   textTransform: "none",
//   fontWeight: 600,
//   borderRadius: 999,
//   padding: "10px 24px",
//   marginTop: 8,

//   "&:hover": {
//     backgroundColor: "#e56f18",
//   },
// });


import { Box, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

/* ===== HERO SECTION ===== */

export const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  color: "#ffffff",
  padding: "120px 80px 160px",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 140px",
  },
}));

export const HeroContent = styled(Box)({
  maxWidth: 600,
});

export const HeroTitle = styled(Typography)({
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 20,
  lineHeight: 1.2,

  "@media (max-width: 600px)": {
    fontSize: 32,
    lineHeight: 1.2,
  },
});

export const HeroSubtitle = styled(Typography)({
  fontSize: 16,
  // opacity: 0.8,
  lineHeight: 1.7,
});

/* ===== FLOATING FORM CARD ===== */

export const FormCard = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "80px",
  top: "80px",
  width: "420px",
  backgroundColor: "#ffffff",
  borderRadius: 16,
  boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
  padding: "40px",
  borderTop: "4px solid var(--color-text-blue)",

  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: "auto",
    top: "auto",
    width: "100%",
    marginTop: 40,
  },
}));

export const FormTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 20,
  color: "#1F2937",
});

export const StyledInput = styled(TextField)({
  marginBottom: 20,
});

export const SubmitButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  color: "#ffffff",
  textTransform: "none",
  fontWeight: 600,
  padding: "12px",
  borderRadius: 6,

  "&:hover": {
    backgroundColor: "#C75B12",
  },
});

/* ===== LOWER INFO SECTION ===== */

export const InfoSection = styled(Box)(({ theme }) => ({
  // backgroundColor: "#F4F5F7",
  padding: "120px 80px 100px",
  marginTop: "-60px",
  maxWidth: 800,
  // marginLeft: "auto",
  // marginRight: "auto",
  borderRadius: 16,

  [theme.breakpoints.down("md")]: {
    padding: "80px 24px",
    marginTop: 0,
  },
}));


export const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 14,
  marginBottom: 14,
});

export const InfoIconWrapper = styled(Box)({
  width: 22,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--color-primary)",
});

export const InfoTextItem = styled(Typography)({
  fontSize: 14,
  color: "#1F2937",
});

export const InfoWrapper = styled(Box)({
  maxWidth: 800,
});

export const InfoText = styled(Typography)({
  fontSize: 16,
  marginBottom: 30,
  color: "#1F2937",
  fontWeight: 500,
});

export const InfoItem = styled(Typography)({
  fontSize: 14,
  marginBottom: 10,
});