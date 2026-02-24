import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box } from "@mui/material";

/* APP BAR */
export const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  // padding:"10px 30px"
   padding: "0px 60px",
   [theme.breakpoints.down("md")]: {
   padding:"0px"
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
    minHeight: 56,        // 🔥 mobile height
    padding: "0 16px",    // 🔥 mobile padding
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
})<{ active?: boolean }>(({  active }) => ({
  fontSize: 16,
  cursor: "pointer",


  "&:hover": {
    color: "var(--color-primary)",
  },
    display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // 👈 pushes arrow right
color: active ? "#f97316" : "var(--color-text-dark)",
}));

export const CloseIconWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
