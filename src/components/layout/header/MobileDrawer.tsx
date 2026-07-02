import React, { useState } from "react";
import { Drawer, Stack, Box, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutePaths";
import AppButton from "../../ui/appButton/AppButton";
import {
  DrawerContainer,
  DrawerItem,
  LogoImage,
  CloseIconWrapper,
  ArrowIcon,
  MenuIconButton,
} from "./Header.style";
import cognitiveLogo from "../../../assets/cognitiveLogo.svg";
import type { SolutionLink, ResourceLink } from "./HeaderData";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  solutionLinks: SolutionLink[];
  resourceLinks: ResourceLink[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  solutionLinks,
  resourceLinks,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsRoute = location.pathname.startsWith("/solutions");

  const handleNavigate = (path: string, state?: unknown) => {
    navigate(path, { state });
    onClose();
    setMobileSolutionsOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LogoImage
            src={cognitiveLogo}
            alt="CognitiveHealth"
            width={180}
            height={50}
            onClick={() => {
              navigate("/", { replace: false });
              onClose();
            }}
          />

          <CloseIconWrapper>
            <MenuIconButton aria-label="Close Menu" onClick={onClose}>
              <CloseIcon />
            </MenuIconButton>
          </CloseIconWrapper>
        </div>
        <Stack spacing={3} mt={4}>
          <DrawerItem active={isActive("/")} onClick={() => handleNavigate("/")}>
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
              <ArrowIcon open={mobileSolutionsOpen} />
            </DrawerItem>

            <Collapse in={mobileSolutionsOpen}>
              <Stack spacing={2} pl={2} mt={1}>
                {solutionLinks.map((item) => (
                  <DrawerItem
                    key={item.title}
                    active={location.hash === `#${item.hash}`}
                    onClick={() => {
                      navigate(`/solutions#${item.hash}`);
                      onClose();
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
              <ArrowIcon open={mobileResourcesOpen} />
            </DrawerItem>

            <Collapse in={mobileResourcesOpen}>
              <Stack spacing={2} pl={2} mt={1}>
                {resourceLinks.map((item) => (
                  <DrawerItem
                    key={item.hash}
                    active={location.hash === `#${item.hash}`}
                    onClick={() => {
                      navigate(`/resources#${item.hash}`);
                      onClose();
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
            onClick={() => {
              navigate("/faq");
              onClose();
            }}
          >
            FAQ
          </DrawerItem>
          <AppButton
            variantType="outline"
            onClick={() =>
              handleNavigate(ROUTES.REQUEST_DEMO, {
                fromLabel: "Menu",
                fromPath: location.pathname,
              })
            }
          >
            Request a Demo
          </AppButton>
          <AppButton
            variantType="primary"
            onClick={() => handleNavigate("/contact-us")}
          >
            Contact Us
          </AppButton>
        </Stack>
      </DrawerContainer>
    </Drawer>
  );
};
