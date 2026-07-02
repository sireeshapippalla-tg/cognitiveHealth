import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Popper, Paper, Stack, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppButton from "../../ui/appButton/AppButton";

/* APP BAR */
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  borderBottom: "1px solid #e5e7eb",
  // padding:"10px 30px"
  padding: "0px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "0px",
  },
}));

/* TOOLBAR */
// export const StyledToolbar = styled(Toolbar)(() => ({
//   // maxWidth: 1200,
//   width: "100%",
//   margin: "0 auto",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",

// }));
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "0 32px",

  minHeight: 72, // desktop height

  [theme.breakpoints.down("md")]: {
    minHeight: 56, // 🔥 mobile height
    padding: "0 16px", // 🔥 mobile padding
  },
}));

/* LOGO */
export const LogoImage = styled("img")({
  height: 50,
  cursor: "pointer",
  display: "block",
  // draggable: false,

  "@media (max-width: 600px)": {
    height: 32,
  },
});

/* NAV ITEM */
export const NavItem = styled("span")<{
  active?: boolean;
}>(({ active }) => ({
  cursor: "pointer",
  fontWeight: active ? 600 : 500,
  fontSize: "large",
  color: active ? "var(--color-primary)" : "var(--color-text-dark)",
  transition: "color 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  position: "relative",
  whiteSpace: "nowrap",

  "&:hover": {
    color: "var(--color-primary)",
  },

  ...(active && {
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -6,
      width: "100%",
      height: 2,
      backgroundColor: "var(--color-primary)",
    },
  }),
}));

/* DRAWER */
export const DrawerContainer = styled(Box)(() => ({
  width: 260,
  padding: 16,
}));

export const DrawerItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  fontSize: 16,
  cursor: "pointer",

  "&:hover": {
    color: "var(--color-primary)",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 👈 pushes arrow right
  color: active ? "var(--color-primary)" : "var(--color-text-dark)",
}));

export const CloseIconWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const DesktopNavStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavItemBox = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
});

export const ArrowIcon = styled(KeyboardArrowDownIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ open }) => ({
  marginLeft: 4,
  transition: "transform 0.2s",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
}));

export const DesktopActionsStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const StyledPopper = styled(Popper)({
  zIndex: 2000,
  paddingTop: 8,
});

export const SolutionsPaper = styled(Paper)({
  width: 800,
  borderRadius: "24px",
  padding: 32,
  marginTop: 8,
  backgroundColor: "var(--color-white)",
  border: "1px solid #E5E7EB",
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  overflow: "hidden",
});

export const SolutionsLeftPanel = styled(Box)({
  width: 220,
  borderRight: "1px solid #F3F4F6",
  paddingRight: 24,
});

export const SolutionsTitle = styled(Typography)({
  marginTop: 8,
  marginBottom: 16,
  color: "var(--color-gray-900)",
  lineHeight: 1.2,
});

export const SolutionsDesc = styled(Typography)({
  marginBottom: 24,
});

export const SolutionsButton = styled(AppButton)({
  fontSize: "0.8rem",
  paddingTop: 8,
  paddingBottom: 8,
});

export const SolutionsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
});

export const ResourcesPaper = styled(Paper)({
  width: 500,
  borderRadius: "24px",
  padding: 24,
  marginTop: 8,
  backgroundColor: "var(--color-white)",
  border: "1px solid #E5E7EB",
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  overflow: "hidden",
});

export const ResourcesTitleBox = styled(Box)({
  marginBottom: 16,
  paddingLeft: 8,
});

export const ResourcesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
});

export const ResourcesFooter = styled(Box)({
  marginTop: 24,
  paddingTop: 16,
  borderTop: "1px solid #F3F4F6",
  textAlign: "center",
});

export const ContactSupportSpan = styled("span")({
  color: "var(--color-primary)",
  cursor: "pointer",
  fontWeight: 600,
});
