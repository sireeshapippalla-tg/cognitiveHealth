import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps {
  variant?: "default" | "pink";
}
interface HeaderProps {
  direction?: "row" | "column";
}
interface TitleProps {
  direction?: "row" | "column";
}
// export const Card = styled(Box)({
//   backgroundColor: "#FFF7F2",
//   borderRadius: "20px",
//   padding: "24px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   width: "100%",
//   minHeight: "152px",
//   border: "1px solid #ECECEC",
//   cursor: "pointer",
//   transition: "all 0.25s ease",

//   "&:hover": {
//     transform: "translateY(-4px)",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//   },
// });

export const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<CardProps>(({ variant }) => ({
  borderRadius: "20px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "152px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  backgroundColor: variant === "pink" ? "#fff7f2" : "#ffffff",
  border: "1px solid #ECECEC",

  "&:hover": {
    backgroundColor: variant === "pink" ? "#ffedd5" : "#f9fafb",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transform: "translateY(-4px)",
  },
}));

export const Header = styled(Box, {
  shouldForwardProp: (prop) => prop !== "direction",
})<HeaderProps>(({ theme, direction = "column" }) => ({
  display: "flex",
  gap: "12px",
  marginBottom: "12px",
  flexDirection: direction,
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const IconBox = styled(Box)({
  backgroundColor: "var(--color-text-blue)",
  color: "#ffffff",
  width: "56px",
  height: "56px",
  borderRadius: "8px",
  padding: "16px",
  gap: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,
  flexGrow: 0,

  "& svg": {
    fontSize: 30,
  },
});

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "direction",
})<TitleProps>(({ direction = "column" }) => ({
  fontWeight: 600,
  fontSize: "20px",
  color: "var(--color-text-dark)",
  lineHeight: '150%',
  textAlign: "left",
  flex: 1,
  wordBreak: "break-word",
  minWidth: 0,
  margin: direction === "row" ? "auto" : "0",
}));

export const Description = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--color-text-light)",
  marginBottom: "12px",
textAlign:"left"
});

export const LearnMoreButton = styled(Button)({
  fontFamily: "Inter",
  fontSize: "14px",
  lineHeight: "140%",
  padding: 0,
  alignSelf: "flex-start",
  color: "var(--color-text-blue)",
  textTransform: "none",
  fontWeight: 500,
});
