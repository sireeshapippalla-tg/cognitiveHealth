import {
  Box,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

import AppButton from "../../ui/appButton/AppButton";
import {
  StyledAppBar,
  StyledToolbar,
  LogoImage,
  NavItem,
  MenuIconButton,
  DesktopNavStack,
  NavItemBox,
  ArrowIcon,
  DesktopActionsStack,
  StyledPopper,
  SolutionsPaper,
  SolutionsLeftPanel,
  SolutionsTitle,
  SolutionsDesc,
  SolutionsButton,
  SolutionsGrid,
  ResourcesPaper,
  ResourcesTitleBox,
  ResourcesGrid,
  ResourcesFooter,
  ContactSupportSpan,
} from "./Header.style";
import cognitiveLogo from "../../../assets/cognitiveLogo.svg";
import PopoverCard from "../../ui/popoverCard/PopoverCard";
import { solutionLinks, resourceLinks } from "./HeaderData";
import { MobileDrawer } from "./MobileDrawer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solutionsAnchorEl, setSolutionsAnchorEl] =
    useState<HTMLElement | null>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [resourcesAnchorEl, setResourcesAnchorEl] =
    useState<HTMLElement | null>(null);

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
  const handleNavigate = (path: string, state?: unknown) => {
    navigate(path, { state });
    setSolutionsOpen(false);
    setDrawerOpen(false);
  };

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
            width={180}
            height={50}
            onClick={() => navigate("/", { replace: false })}
          />

          {/* ================= DESKTOP NAV ================= */}
          <DesktopNavStack
            direction="row"
            spacing={{ md: 2, lg: 4 }}
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
            <NavItemBox
              onMouseEnter={(e) => handleOpenSolutions(e.currentTarget)}
              onMouseLeave={handleCloseSolutions}
            >
              <NavItem active={solutionsOpen || isSolutionsRoute}>
                Solutions
                <ArrowIcon
                  fontSize="small"
                  open={solutionsOpen}
                />
              </NavItem>
            </NavItemBox>

            <NavItem
              active={isActive("/about-us")}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </NavItem>

            <NavItemBox
              onMouseEnter={(e) => handleOpenResources(e.currentTarget)}
              onMouseLeave={handleCloseResources}
            >
              <NavItem
                active={resourcesOpen || location.pathname === "/resources"}
              >
                Resources
                <ArrowIcon
                  fontSize="small"
                  open={resourcesOpen}
                />
              </NavItem>
            </NavItemBox>
            <NavItem active={isActive("/faq")} onClick={() => navigate("/faq")}>
              FAQ
            </NavItem>
          </DesktopNavStack>

          {/* DESKTOP ACTIONS */}
          <DesktopActionsStack
            direction="row"
            spacing={2}
          >
            <AppButton
              variantType="primary"
              onClick={() => handleNavigate("/contact-us")}
            >
              Contact Us
            </AppButton>
          </DesktopActionsStack>

          {/* MOBILE MENU ICON */}
          <MenuIconButton
            aria-label="Toggle Menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </MenuIconButton>
        </StyledToolbar>
      </StyledAppBar>

      {/* ================= DESKTOP SOLUTIONS DROPDOWN ================= */}
      <StyledPopper
        open={solutionsOpen}
        anchorEl={solutionsAnchorEl}
        placement="bottom"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
          onMouseLeave={handleCloseSolutions}
        >
          <SolutionsPaper
            elevation={0}
          >
            <Box display="flex" gap={4}>
              {/* Left Side: Featured / Category */}
              <SolutionsLeftPanel>
                <Typography
                  variant="overline"
                  color="var(--color-primary)"
                  fontWeight={800}
                  letterSpacing={1.2}
                >
                  Our Ecosystem
                </Typography>
                <SolutionsTitle
                  variant="h6"
                  fontWeight={800}
                >
                  Specialized AI Solutions for RCM
                </SolutionsTitle>
                <SolutionsDesc
                  variant="body2"
                  color="var(--color-gray-500)"
                >
                  Deploy tailored AI agents to automate complexity across your
                  entire revenue cycle.
                </SolutionsDesc>
                <SolutionsButton
                  variantType="outline"
                  onClick={() => navigate("/solutions")}
                >
                  View All Solutions
                </SolutionsButton>
              </SolutionsLeftPanel>

              {/* Right Side: Grid of Solutions */}
              <Box flex={1}>
                <SolutionsGrid>
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
                </SolutionsGrid>
              </Box>
            </Box>
          </SolutionsPaper>
        </motion.div>
      </StyledPopper>

      {/* ================= DESKTOP RESOURCES DROPDOWN ================= */}
      <StyledPopper
        open={resourcesOpen}
        anchorEl={resourcesAnchorEl}
        placement="bottom"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() =>
            closeTimer.current && clearTimeout(closeTimer.current)
          }
          onMouseLeave={handleCloseResources}
        >
          <ResourcesPaper
            elevation={0}
          >
            <ResourcesTitleBox>
              <Typography
                variant="overline"
                color="var(--color-primary)"
                fontWeight={800}
                letterSpacing={1.2}
              >
                Knowledge Center
              </Typography>
            </ResourcesTitleBox>
            <ResourcesGrid>
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
            </ResourcesGrid>
            <ResourcesFooter>
              <Typography variant="body2" color="var(--color-gray-500)">
                Need help?{" "}
                <ContactSupportSpan
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Support
                </ContactSupportSpan>
              </Typography>
            </ResourcesFooter>
          </ResourcesPaper>
        </motion.div>
      </StyledPopper>

      {/* ================= MOBILE DRAWER ================= */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        solutionLinks={solutionLinks}
        resourceLinks={resourceLinks}
      />
    </>
  );
};

export default Header;
