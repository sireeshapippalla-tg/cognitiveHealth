import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";

export const BlogContainer = styled("div")(({ theme }) => ({
  padding: "30px 80px",

  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const StyledTabs = styled(Tabs)({
  backgroundColor: "#F5F5F5", // Light gray background like in the image
  borderRadius: "8px",
  border: "1px solid #ECECEC", // Light border for separation
  padding: "4px",
  minHeight: "48px",
  width: "fit-content",
  "& .MuiTabs-indicator": {
    display: "none", // Hide default indicator
  },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "15px",
  color: theme.palette.text.secondary,
  minHeight: "40px",
  borderRadius: "6px",
  // padding: "8px 16px",
  transition: "all 0.2s ease",
  "&.Mui-selected": {
    backgroundColor: "#ffffff",
    color: theme.palette.text.primary,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  },
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
}));

export const FilterContainer = styled("div")({
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
  flexWrap: "wrap",
  gap: "16px",
});
