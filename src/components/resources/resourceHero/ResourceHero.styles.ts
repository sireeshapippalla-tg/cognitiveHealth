import { Box, Chip, IconButton, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Hero = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff7ed",
  padding: "80px 24px 100px",
  textAlign: "center",
  backgroundImage: " linear-gradient(180deg, #FFE0CD 0%, #FFFFFF 100%)",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    padding: "60px 16px 80px",
  },
}));

export const ResourceCenterChip = styled(Chip)({
  backgroundColor: "#FFFFFF99",
  border: " 1px solid #FFFFFFB2",
  borderRadius: "16px",
  fontWeight: 600,
  fontSize: "18px",
  // marginBottom: "24px",
  padding: "18px",
});

export const StyledInput = styled(InputBase)({
  flex: 1,
  marginLeft: "16px",
  fontSize: "16px",
});

export const SearchButton = styled(IconButton)({
  backgroundColor: "#E88D3E",
  color: "white",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#d67d2e",
  },
});
export const Title = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: 600,
  marginBottom: "16px",
  color: "var(--color-text-dark)",
}));

export const Subtitle = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontWeight: 400,
  color: "var(--color-text-light)",
  maxWidth: "655px",
  margin: "0 auto 40px",
  fontSize: "20px",
  lineHeight: "150%",
}));

export const SearchWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 550,
  margin: "0 auto",
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "100px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #ECECEC",
  transition: "all 0.2s ease",
  "&:hover, &:focus-within": {
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
    borderColor: theme.palette.primary.main,
  },
}));
