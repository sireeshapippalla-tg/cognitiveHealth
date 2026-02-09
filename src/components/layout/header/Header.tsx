import { Stack, IconButton, Drawer, Box, Popper, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [solutionsAnchorEl, setSolutionsAnchorEl] =
    useState<HTMLElement | null>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setTimeout(() => {
      setSolutionsOpen(false);
      setSolutionsAnchorEl(null);
    }, 0);
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setSolutionsOpen(false);
    setSolutionsAnchorEl(null);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <StyledAppBar position="sticky" elevation={0}>
        <StyledToolbar>
          {/* LOGO */}
          <LogoImage
            src={cognitiveLogo}
            alt="CognitiveHealth"
            onClick={() => navigate("/")}
          />

          {/* DESKTOP NAV */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <NavItem active={isActive("/")} onClick={() => navigate("/")}>
              Home
            </NavItem>

            <NavItem
              active={isActive("/platform")}
              onClick={() => navigate("/platform")}
            >
              Platform
            </NavItem>

            {/* SOLUTIONS DROPDOWN */}

            <Box
              onMouseEnter={(e) => {
                setSolutionsAnchorEl(e.currentTarget);
                setSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                setTimeout(() => setSolutionsOpen(false), 150);
              }}
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <NavItem active={solutionsOpen || isActive("/solutions")}>
                Solutions
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{
                    ml: 0.5,
                    transition: "transform 0.2s ease",
                    transform: solutionsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </NavItem>
            </Box>

            <NavItem
              active={isActive("/about-us")}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </NavItem>

            <NavItem
              active={isActive("/resources")}
              onClick={() => navigate("/resources")}
            >
              Resources
            </NavItem>
          </Stack>

          {/* DESKTOP LOGIN */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <AppButton variantType="primary">Login</AppButton>
          </Box>

          {/* MOBILE MENU */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>

      {/* ================= SOLUTIONS DROPDOWN ================= */}
      <Popper
        open={solutionsOpen}
        anchorEl={solutionsAnchorEl}
        placement="bottom"
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: { offset: [0, 8] },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 8,
            },
          },
        ]}
      >
        <Box
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <Paper
            elevation={4}
            sx={{
              width: 720,
              borderRadius: 3,
              padding: 3,
            }}
          >
            <Stack direction="row" spacing={4}>
              {/* LEFT COLUMN */}
              <Stack spacing={3} flex={1}>
                <SolutionItem
                  title="Payment Posting"
                  desc="Automated reconciliation and posting"
                  path="/solutions/payment-posting"
                  highlight
                  onNavigate={handleNavigate}
                />
                <SolutionItem
                  title="Lockbox Management"
                  desc="AI-powered document ingestion system"
                  path="/solutions/lockbox"
                  onNavigate={handleNavigate}
                />
                <SolutionItem
                  title="Denials Workflow"
                  desc="Smart prioritization and appeals"
                  path="/solutions/denials"
                  onNavigate={handleNavigate}
                />
              </Stack>

              {/* RIGHT COLUMN */}
              <Stack spacing={3} flex={1}>
                <SolutionItem
                  title="Eligibility Discovery"
                  desc="Real-time coverage verification portal"
                  path="/solutions/eligibility"
                  onNavigate={handleNavigate}
                />
                <SolutionItem
                  title="Contract Analysis"
                  desc="Intelligent contract research assistant"
                  path="/solutions/contract-analysis"
                  onNavigate={handleNavigate}
                />
                <SolutionItem
                  title="Pre-Bill Services"
                  desc="Automated charge capture validation"
                  path="/solutions/pre-bill"
                  onNavigate={handleNavigate}
                />
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Popper>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContainer>
          <CloseIconWrapper>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </CloseIconWrapper>

          <Stack spacing={3} mt={4}>
            <DrawerItem onClick={() => handleNavigate("/")}>Home</DrawerItem>
            <DrawerItem onClick={() => handleNavigate("/platform")}>
              Platform
            </DrawerItem>
            <DrawerItem onClick={() => handleNavigate("/solutions")}>
              Solutions
            </DrawerItem>
            <DrawerItem onClick={() => handleNavigate("/about-us")}>
              About Us
            </DrawerItem>
            <DrawerItem onClick={() => handleNavigate("/resources")}>
              Resources
            </DrawerItem>

            <AppButton variantType="primary">Login</AppButton>
          </Stack>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default Header;
