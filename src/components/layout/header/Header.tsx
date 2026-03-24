import {
  Stack,
  IconButton,
  Drawer,
  Box,
  Popper,
  Paper,
  Collapse,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
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
// import { SolutionItem } from "./SolutionItem";
import cognitiveLogo from "../../../assets/cognitiveLogo.svg";
import Vector from "../../../assets/Vector.svg";
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";
import Analysis from "../../../assets/Analysis.svg";
import PreBill from "../../../assets/Prebill.svg";
import PopoverCard from "../../ui/popoverCard/PopoverCard";

import BlogIcon from "../../../assets/Resources/Blog.svg";
import CaseStudyIcon from "../../../assets/Resources/Casestudy.svg";
import VideoIcon from "../../../assets/Resources/video.svg";
import MediaIcon from "../../../assets/Resources/media.svg";

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
    setResourcesOpen(false);
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
      // path: "/solutions/payment-posting",
      hash: "paymentPosting",
      icon: (
        <img src={Vector} alt="Vector Icon" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      title: "Lockbox Management",
      desc: "AI-powered document ingestion system",
      // path: "/solutions/lockbox",
      hash: "lockboxManagement",
      icon: (
        <img src={Frame} alt="Frame Icon" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      title: "Denials Workflow",
      desc: "Smart prioritization and appeals",
      // path: "/solutions/denials",
      hash: "denialWorkflow",
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
      // path: "/solutions/eligibility",
      hash: "eligibilityDiscovery",
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
      // path: "/solutions/contract-analysis",
      hash: "contractAnalysis",
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
      // path: "/solutions/pre-bill",
      hash: "preBillReview",
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
    {
      title: "Blog",
      hash: "blog",
      icon: (
        <img
          src={BlogIcon}
          alt="Blog Icon"
          style={{
            width: 24,
            height: 24,
            filter: "brightness(0) invert(1)",
          }}
        />
      ),
    },
    // {
    //   title: "Case Studies",
    //   hash: "case-study",
    //   icon: (
    //     <img
    //       src={CaseStudyIcon}
    //       alt="Case Study Icon"
    //       style={{
    //         width: 24,
    //         height: 24,
    //         filter: "brightness(0) invert(1)",
    //       }}
    //     />
    //   ),
    // },
    {
      title: "Videos",
      hash: "videos",
      icon: (
        <img
          src={VideoIcon}
          alt="Video Icon"
          style={{
            width: 24,
            height: 24,
            filter: "brightness(0) invert(1)",
          }}
        />
      ),
    },
    {
      title: "Media",
      hash: "media",
      icon: (
        <img
          src={MediaIcon}
          alt="Media Icon"
          style={{
            width: 24,
            height: 24,
            filter: "brightness(0) invert(1)",
          }}
        />
      ),
    },
  ];

  const handleOpenResources = (el: HTMLElement) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(false);
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
        sx={{ zIndex: 2000, pt: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
          onMouseLeave={handleCloseSolutions}
        >
          <Paper
            elevation={0}
            sx={{
              width: 800,
              borderRadius: "24px",
              p: 4,
              mt: 1,
              backgroundColor: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <Box display="flex" gap={4}>
              {/* Left Side: Featured / Category */}
              <Box sx={{ width: 220, borderRight: "1px solid #F3F4F6", pr: 3 }}>
                <Typography
                  variant="overline"
                  color="#F47A20"
                  fontWeight={800}
                  letterSpacing={1.2}
                >
                  Our Ecosystem
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  sx={{ mt: 1, mb: 2, color: "#111827", lineHeight: 1.2 }}
                >
                  Specialized AI Solutions for RCM
                </Typography>
                <Typography variant="body2" color="#6B7280" sx={{ mb: 3 }}>
                  Deploy tailored AI agents to automate complexity across your
                  entire revenue cycle.
                </Typography>
                <AppButton
                  variantType="outline"
                  onClick={() => navigate("/solutions")}
                  sx={{ fontSize: "0.8rem", py: 1 }}
                >
                  View All Solutions
                </AppButton>
              </Box>

              {/* Right Side: Grid of Solutions */}
              <Box flex={1}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                  }}
                >
                  {solutionLinks.map((item) => (
                    <PopoverCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      description={item.desc}
                      onClick={() => {
                        navigate(`/solutions#${item.hash}`);
                        setSolutionsOpen(false);
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Popper>

      <Popper
        open={resourcesOpen}
        anchorEl={resourcesAnchorEl}
        placement="bottom"
        sx={{ zIndex: 2000, pt: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
          onMouseLeave={handleCloseResources}
        >
          <Paper
            elevation={0}
            sx={{
              width: 500,
              borderRadius: "24px",
              p: 3,
              mt: 1,
              backgroundColor: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ mb: 2, px: 1 }}>
              <Typography
                variant="overline"
                color="#F47A20"
                fontWeight={800}
                letterSpacing={1.2}
              >
                Knowledge Center
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5,
              }}
            >
              {resourceLinks.map((item) => (
                <PopoverCard
                  key={item.hash}
                  icon={item.icon}
                  title={item.title}
                  onClick={() => {
                    navigate(`/resources#${item.hash}`);
                    setResourcesOpen(false);
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                mt: 3,
                pt: 2,
                borderTop: "1px solid #F3F4F6",
                textAlign: "center",
              }}
            >
              <Typography variant="body2" color="#6B7280">
                Need help?{" "}
                <Box
                  component="span"
                  sx={{ color: "#F47A20", cursor: "pointer", fontWeight: 600 }}
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Support
                </Box>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
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
                      active={location.hash === `#${item.hash}`}
                      onClick={() => {
                        navigate(`/solutions#${item.hash}`);
                        setDrawerOpen(false);
                      }}
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

            <DrawerItem
              active={isActive("/faq")}
              onClick={() => navigate("/faq")}
            >
              FAQ
            </DrawerItem>
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
