import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MenuItem,
  Select,
  FormControl,
  Box,
  type SelectChangeEvent,
} from "@mui/material";
import ResourceList from "../resourceList/ResourceList";
import {
  BlogContainer,
  StickyTabsWrapper,
  TabsContainer,
  TabButton,
  ActiveBackground,
  TabText,
  FilterWrapper,
} from "./ResourceTabs.styles";
import BlogIcon from "../../../assets/Resources/Blog.svg";
import CaseStudyIcon from "../../../assets/Resources/Casestudy.svg";
import VideoIcon from "../../../assets/Resources/video.svg";
import MediaIcon from "../../../assets/Resources/media.svg";

const ResourceTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTabClickRef = React.useRef(false);
  
  const tabs = [
    {
      value: "blog",
      label: "Blog",
      icon: <img src={BlogIcon} alt="Blog Icon" width={16} height={16} />,
    },
    {
      value: "case-study",
      label: "Case Studies",
      icon: (
        <img src={CaseStudyIcon} alt="Case Study Icon" width={16} height={16} />
      ),
    },
    {
      value: "videos",
      label: "Videos",
      icon: <img src={VideoIcon} alt="Video Icon" width={16} height={16} />,
    },
    {
      value: "media",
      label: "Media",
      icon: <img src={MediaIcon} alt="Media Icon" width={16} height={16} />,
    },
  ];

  const activeTab =
    tabs.findIndex((tab) => tab.value === location.hash.replace("#", "")) || 0;

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (!isTabClickRef.current) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const element = document.getElementById("resources-content");
    if (!element) return;

    requestAnimationFrame(() => {
      const yOffset = -220;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });

    isTabClickRef.current = false;
  }, [location.hash]);

  const handleTabChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    newValue: number,
  ) => {
    isTabClickRef.current = true;
    navigate(`/resources#${tabs[newValue].value}`, {
      replace: true,
    });
  };

  const [filter, setFilter] = useState("Filter By");

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <StickyTabsWrapper>
        <TabsContainer>
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.value}
              onClick={(e) => handleTabChange(e, index)}
              $active={activeTab === index}
            >
              {activeTab === index && (
                <ActiveBackground
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                />
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, position: 'relative', zIndex: 1 }}>
                <motion.div
                  animate={{ 
                    filter: activeTab === index ? 'brightness(0) invert(1)' : 'grayscale(1) opacity(0.6)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.icon}
                </motion.div>
                <TabText $active={activeTab === index}>{tab.label}</TabText>
              </Box>
            </TabButton>
          ))}
        </TabsContainer>

        <FilterWrapper>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select
              value={filter}
              onChange={handleFilterChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    zIndex: 5000,
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    mt: 1
                  },
                },
              }}
              sx={{
                fontSize: "14px",
                bgcolor: "#f9fafb",
                color: "#64748b",
                borderRadius: "100px",
                padding: "2px 12px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.05)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.1)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--color-primary)",
                },
                fontWeight: 600,
              }}
            >
              <MenuItem value="Filter By">Filter By</MenuItem>
              <MenuItem value="Recent">Recent</MenuItem>
              <MenuItem value="Popular">Popular</MenuItem>
            </Select>
          </FormControl>
        </FilterWrapper>
      </StickyTabsWrapper>

      <BlogContainer>
        <AnimatePresence mode="wait">
          <motion.div
            id="resources-content"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ResourceList activeTab={activeTab} />
          </motion.div>
        </AnimatePresence>
      </BlogContainer>
    </>
  );
};

export default ResourceTabs;
