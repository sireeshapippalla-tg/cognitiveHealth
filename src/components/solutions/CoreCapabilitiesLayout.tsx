import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableCard, { type ExpandableItem } from "../ui/teamCard/expandableCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled(Box)({
  width: "100%",
  marginTop: "20px",
});

const DesktopLayout = styled(Box)({
  display: "flex",
  gap: "32px",
  alignItems: "stretch",
  minHeight: "450px",
});

const TabList = styled(Box)({
  flex: "0 0 35%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "center",
});

const TabButton = styled(motion.div)<{ active: boolean }>(({ active }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "18px 24px",
  borderRadius: "16px",
  cursor: "pointer",
  background: active
    ? "linear-gradient(135deg, rgba(235, 123, 51, 0.08) 0%, rgba(235, 123, 51, 0.02) 100%)"
    : "#ffffff",
  border: active ? "1px solid rgba(235, 123, 51, 0.4)" : "1px solid #e2e8f0",
  boxShadow: active ? "0 10px 25px -5px rgba(235, 123, 51, 0.1)" : "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    borderColor: active ? "rgba(235, 123, 51, 0.4)" : "#cbd5e1",
    background: active
      ? "linear-gradient(135deg, rgba(235, 123, 51, 0.08) 0%, rgba(235, 123, 51, 0.02) 100%)"
      : "#f8fafc",
    transform: active ? "none" : "translateX(4px)",
  },
}));

const TabIconCircle = styled(Box)<{ active: boolean }>(({ active }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  backgroundColor: active ? "#eb7b33" : "rgba(235, 123, 51, 0.06)",
  color: active ? "#ffffff" : "#eb7b33",
  transition: "all 0.3s ease",
  flexShrink: 0,
  "& svg": {
    fontSize: "22px",
  },
}));

const TabTitle = styled(Typography)<{ active: boolean }>(({ active }) => ({
  fontWeight: active ? 700 : 600,
  color: active ? "#eb7b33" : "#0f172a",
  fontSize: "0.95rem",
  lineHeight: 1.3,
  flexGrow: 1,
}));

const DetailsContainer = styled(Box)({
  flex: "1",
  position: "relative",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "24px",
  padding: "40px",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const DetailsGlow = styled(Box)({
  position: "absolute",
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(235, 123, 51, 0.12), transparent 70%)",
  top: "-80px",
  right: "-80px",
  pointerEvents: "none",
  zIndex: 0,
});

const DetailsHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "28px",
  position: "relative",
  zIndex: 1,
});

const DetailsIconCircle = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  backgroundColor: "rgba(235, 123, 51, 0.1)",
  color: "#eb7b33",
  "& svg": {
    fontSize: "30px",
  },
});

const DetailsTitle = styled(Typography)({
  fontWeight: 800,
  color: "#0f172a",
  fontSize: "1.75rem",
  lineHeight: 1.2,
});

const DetailsContent = styled(Box)({
  position: "relative",
  zIndex: 1,
  color: "#475569",
  fontSize: "1.05rem",
  lineHeight: 1.7,
});

const MobileStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

interface CoreCapabilitiesLayoutProps {
  items: ExpandableItem[];
}

export const CoreCapabilitiesLayout: React.FC<CoreCapabilitiesLayoutProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const activeItem = items[activeIndex] || items[0];

  if (!isDesktop) {
    return (
      <Container>
        <MobileStack>
          {items.map((item) => (
            <ExpandableCard key={item.id} item={item} variant="capability" />
          ))}
        </MobileStack>
      </Container>
    );
  }

  return (
    <Container>
      <DesktopLayout>
        {/* Left tabs list */}
        <TabList>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <TabButton
                key={item.id}
                active={isActive}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ scale: isActive ? 1 : 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <TabIconCircle active={isActive}>{item.icon}</TabIconCircle>
                <TabTitle active={isActive}>{item.title}</TabTitle>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "14px",
                    color: isActive ? "#eb7b33" : "#94a3b8",
                    opacity: isActive ? 1 : 0.5,
                    transition: "all 0.3s ease",
                  }}
                />
              </TabButton>
            );
          })}
        </TabList>

        {/* Right Details Pane */}
        <DetailsContainer>
          <DetailsGlow />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}
            >
              <DetailsHeader>
                <DetailsIconCircle>{activeItem.icon}</DetailsIconCircle>
                <DetailsTitle variant="h4">{activeItem.title}</DetailsTitle>
              </DetailsHeader>
              <DetailsContent>{activeItem.description}</DetailsContent>
            </motion.div>
          </AnimatePresence>
        </DetailsContainer>
      </DesktopLayout>
    </Container>
  );
};

export default CoreCapabilitiesLayout;
