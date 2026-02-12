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

export const ResourceCenterChip = styled(Chip)({
  backgroundColor: "#FFFFFF99",
  border: " 1px solid #FFFFFFB2",
  borderRadius: "16px",
  fontWeight: 600,
  fontSize: "18px",
  // marginBottom: "24px",
  padding: "18px",
});
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: "16px",
  color: theme.palette.text.primary,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: "600px",
  margin: "0 auto 40px",
  fontSize: "18px",
  lineHeight: 1.6,
}));

export const SearchWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 520,
  margin: "0 auto",
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "50px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #F3F4F6",
  transition: "all 0.2s ease",
  "&:hover, &:focus-within": {
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
    borderColor: theme.palette.primary.main,
  },
}));
