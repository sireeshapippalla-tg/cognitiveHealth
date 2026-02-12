import {
  Stack,
  IconButton,
  Drawer,
  Box,
  Popper,
  Paper,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

import AppButton from "../../ui/appButton/AppButton";
import {
  StyledAppBar,
  StyledToolbar,
  LogoImage,
  NavItem,
  DrawerContainer,
  DrawerItem,
  CloseIconWrapper,
} from "./Header.styles";
import { SolutionItem } from "./SolutionItem";
import cognitiveLogo from "../../../assets/cognitiveLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsAnchorEl, setSolutionsAnchorEl] =
    useState<HTMLElement | null>(null);

  /** FIX: browser-safe timer type */
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Active route helpers */
  const isActive = (path: string) => location.pathname === path;
  const isSolutionsRoute = location.pathname.startsWith("/solutions");

  /** ================= DESKTOP HOVER ================= */
  const handleOpenSolutions = (el: HTMLElement) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsAnchorEl(el);
    setSolutionsOpen(true);
  };

  const handleCloseSolutions = () => {
    closeTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  /** ================= NAVIGATION ================= */
  const handleNavigate = (path: string) => {
    navigate(path);
    setSolutionsOpen(false);
    setDrawerOpen(false);
    setMobileSolutionsOpen(false);
  };

  /** ================= SOLUTION LINKS ================= */
  const solutionLinks = [
    {
      title: "Payment Posting",
      desc: "Automated reconciliation and posting",
      path: "/solutions/payment-posting",
    },
    {
      title: "Lockbox Management",
      desc: "AI-powered document ingestion system",
      path: "/solutions/lockbox",
    },
    {
      title: "Denials Workflow",
      desc: "Smart prioritization and appeals",
      path: "/solutions/denials",
    },
    {
      title: "Eligibility Discovery",
      desc: "Real-time coverage verification portal",
      path: "/solutions/eligibility",
    },
    {
      title: "Contract Analysis",
      desc: "Intelligent contract research assistant",
      path: "/solutions/contract-analysis",
    },
    {
      title: "Pre-Bill Services",
      desc: "Automated charge capture validation",
      path: "/solutions/pre-bill",
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <StyledAppBar position="sticky" elevation={0}>
        <StyledToolbar>
          {/* LOGO */}
          <LogoImage
            src={cognitiveLogo}
            alt="CognitiveHealth"
            onClick={() => navigate("/", { replace: false })}
          />

          {/* ================= DESKTOP NAV ================= */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
            <NavItem active={isActive("/")} onClick={() => navigate("/")}>
              Home
            </NavItem>

            <NavItem active={isActive("/platform")} onClick={() => navigate("/platform")}>
              Platform
            </NavItem>

            {/* SOLUTIONS TAB */}
            <Box
              onMouseEnter={(e) => handleOpenSolutions(e.currentTarget)}
              onMouseLeave={handleCloseSolutions}
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <NavItem active={solutionsOpen || isSolutionsRoute}>
                Solutions
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{
                    ml: 0.5,
                    transition: "transform 0.2s",
                    transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </NavItem>
            </Box>

            <NavItem active={isActive("/about-us")} onClick={() => navigate("/about-us")}>
              About Us
            </NavItem>

            <NavItem active={isActive("/resources")} onClick={() => navigate("/resources")}>
              Resources
            </NavItem>
          </Stack>

          {/* DESKTOP LOGIN */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <AppButton variantType="primary" onClick={() => navigate("/contact-us")}>Contact Us</AppButton>
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>

      {/* ================= DESKTOP SOLUTIONS DROPDOWN ================= */}
      <Popper open={solutionsOpen} anchorEl={solutionsAnchorEl} placement="bottom" sx={{ zIndex: 1300 }}>
        <Box
          onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
          onMouseLeave={handleCloseSolutions}
        >
          <Paper elevation={4} sx={{ width: 720, borderRadius: 3, p: 3 }}>
            <Stack direction="row" spacing={4}>
              <Stack spacing={3} flex={1}>
                {solutionLinks.slice(0, 3).map((item) => (
                  <SolutionItem
                    key={item.title}
                    {...item}
                    active={isActive(item.path)}
                    onNavigate={handleNavigate}
                  />
                ))}
              </Stack>

              <Stack spacing={3} flex={1}>
                {solutionLinks.slice(3).map((item) => (
                  <SolutionItem
                    key={item.title}
                    {...item}
                    active={isActive(item.path)}
                    onNavigate={handleNavigate}
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Popper>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerContainer>
          <CloseIconWrapper>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </CloseIconWrapper>

          <Stack spacing={3} mt={4}>
            <DrawerItem active={isActive("/")} onClick={() => handleNavigate("/")}>
              Home
            </DrawerItem>

            <DrawerItem active={isActive("/platform")} onClick={() => handleNavigate("/platform")}>
              Platform
            </DrawerItem>

            {/* MOBILE SOLUTIONS */}
            <Box>
              <DrawerItem active={isSolutionsRoute} onClick={() => setMobileSolutionsOpen((p) => !p)}>
                <span>Solutions</span>
                <KeyboardArrowDownIcon
                  style={{
                    transform: mobileSolutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              </DrawerItem>

              <Collapse in={mobileSolutionsOpen}>
                <Stack spacing={2} pl={2} mt={1}>
                  {solutionLinks.map((item) => (
                    <DrawerItem
                      key={item.title}
                      active={isActive(item.path)}
                      onClick={() => handleNavigate(item.path)}
                    >
                      {item.title}
                    </DrawerItem>
                  ))}
                </Stack>
              </Collapse>
            </Box>

            <DrawerItem active={isActive("/about-us")} onClick={() => handleNavigate("/about-us")}>
              About Us
            </DrawerItem>

            <DrawerItem active={isActive("/resources")} onClick={() => handleNavigate("/resources")}>
              Resources
            </DrawerItem>

            <AppButton variantType="primary" onClick={() => handleNavigate("/contact-us")}>Contact Us</AppButton>
          </Stack>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default Header;
