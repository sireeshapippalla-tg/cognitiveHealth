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
import Vector from "../../../assets/Vector.svg";
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";
import Analysis from "../../../assets/Analysis.svg";
import PreBill from "../../../assets/Prebill.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsAnchorEl, setSolutionsAnchorEl] =
    useState<HTMLElement | null>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [resourcesAnchorEl, setResourcesAnchorEl] =
    useState<HTMLElement | null>(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

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
      icon: (
        <img src={Vector} alt="Vector Icon" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      title: "Lockbox Management",
      desc: "AI-powered document ingestion system",
      path: "/solutions/lockbox",
      icon: (
        <img src={Frame} alt="Frame Icon" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      title: "Denials Workflow",
      desc: "Smart prioritization and appeals",
      path: "/solutions/denials",
      icon: (
        <img
          src={Eligibility}
          alt="Eligibility Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      title: "Eligibility Discovery",
      desc: "Real-time coverage verification portal",
      path: "/solutions/eligibility",
      icon: (
        <img
          src={Workflow}
          alt="Workflow Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      title: "Contract Analysis",
      desc: "Intelligent contract research assistant",
      path: "/solutions/contract-analysis",
      icon: (
        <img
          src={Analysis}
          alt="Analysis Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      title: "Pre-Bill Services",
      desc: "Automated charge capture validation",
      path: "/solutions/pre-bill",
      icon: (
        <img
          src={PreBill}
          alt="PreBill Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
  ];

  const resourceLinks = [
    { title: "Blog", hash: "blog" },
    { title: "Case Studies", hash: "case-study" },
    { title: "Videos", hash: "videos" },
    { title: "Media", hash: "media" },
  ];

  const handleOpenResources = (el: HTMLElement) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesAnchorEl(el);
    setResourcesOpen(true);
  };

  const handleCloseResources = () => {
    closeTimer.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200);
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
            onClick={() => navigate("/", { replace: false })}
          />

          {/* ================= DESKTOP NAV ================= */}
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

            <Box
              onMouseEnter={(e) => handleOpenResources(e.currentTarget)}
              onMouseLeave={handleCloseResources}
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <NavItem
                active={resourcesOpen || location.pathname === "/resources"}
              >
                Resources
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{
                    ml: 0.5,
                    transition: "transform 0.2s",
                    transform: resourcesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </NavItem>
            </Box>
            <NavItem active={isActive("/faq")} onClick={() => navigate("/faq")}>
              FAQ
            </NavItem>
          </Stack>

          {/* DESKTOP LOGIN */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <AppButton
              variantType="primary"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </AppButton>
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
      <Popper
        open={solutionsOpen}
        anchorEl={solutionsAnchorEl}
        placement="bottom"
        sx={{ zIndex: 1300 }}
      >
        <Box
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
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

      <Popper
        open={resourcesOpen}
        anchorEl={resourcesAnchorEl}
        placement="bottom"
        sx={{ zIndex: 1300 }}
      >
        <Box
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
          onMouseLeave={handleCloseResources}
        >
          <Paper elevation={4} sx={{ width: 240, borderRadius: 3, p: 2 }}>
            <Stack spacing={2}>
              {resourceLinks.map((item) => (
                <Box
                  key={item.hash}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": { color: "#1976d2" },
                  }}
                  onClick={() => {
                    navigate(`/resources#${item.hash}`);
                    setResourcesOpen(false);
                  }}
                >
                  {item.title}
                </Box>
              ))}
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
            <DrawerItem
              active={isActive("/")}
              onClick={() => handleNavigate("/")}
            >
              Home
            </DrawerItem>

            <DrawerItem
              active={isActive("/platform")}
              onClick={() => handleNavigate("/platform")}
            >
              Platform
            </DrawerItem>

            {/* MOBILE SOLUTIONS */}
            <Box>
              <DrawerItem
                active={isSolutionsRoute}
                onClick={() => setMobileSolutionsOpen((p) => !p)}
              >
                <span>Solutions</span>
                <KeyboardArrowDownIcon
                  style={{
                    transform: mobileSolutionsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
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

            <DrawerItem
              active={isActive("/about-us")}
              onClick={() => handleNavigate("/about-us")}
            >
              About Us
            </DrawerItem>

            <Box>
              <DrawerItem
                active={location.pathname === "/resources"}
                onClick={() => setMobileResourcesOpen((prev) => !prev)}
              >
                <span>Resources</span>
                <KeyboardArrowDownIcon
                  style={{
                    transform: mobileResourcesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              </DrawerItem>

              <Collapse in={mobileResourcesOpen}>
                <Stack spacing={2} pl={2} mt={1}>
                  {resourceLinks.map((item) => (
                    <DrawerItem
                      key={item.hash}
                      active={location.hash === `#${item.hash}`}
                      onClick={() => {
                        navigate(`/resources#${item.hash}`);
                        setDrawerOpen(false);
                        setMobileResourcesOpen(false);
                      }}
                    >
                      {item.title}
                    </DrawerItem>
                  ))}
                </Stack>
              </Collapse>
            </Box>

            <AppButton
              variantType="primary"
              onClick={() => handleNavigate("/contact-us")}
            >
              Contact Us
            </AppButton>
          </Stack>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default Header;
