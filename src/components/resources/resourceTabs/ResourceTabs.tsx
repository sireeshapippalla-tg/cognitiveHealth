import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MenuItem,
  Select,
  FormControl,
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
} from "./ResourceTabs.styles";
import BlogIcon from "../../../assets/Resources/Blog.svg";
import CaseStudyIcon from "../../../assets/Resources/Casestudy.svg";
import VideoIcon from "../../../assets/Resources/video.svg";
import MediaIcon from "../../../assets/Resources/media.svg";

const ResourceTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTabClickRef = React.useRef(false);
  // const tabHashMap = ["blog", "case-study", "videos", "media"];
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
    // If there is NO hash, user came from another page
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (!isTabClickRef.current) {
      // Came from another page → start at top
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Internal tab click → scroll to content
    const element = document.getElementById("resources-content");
    if (!element) return;

    requestAnimationFrame(() => {
      const yOffset = -150;
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
    // Implement filter logic here based on event.target.value
  };

  return (
    <BlogContainer>
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
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}

              <TabText $active={activeTab === index}>{tab.label}</TabText>
            </TabButton>
          ))}
        </TabsContainer>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              // fontFamily: "Inter",
              fontSize: "14px",
              bgcolor: "#fff",
              color: "#656565",
              borderRadius: "8px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E5E7EB",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D1D5DB",
              },
              typography: "body2",
              fontWeight: 500,
            }}
          >
            <MenuItem value="Filter By">Filter By</MenuItem>
            <MenuItem value="Recent">Recent</MenuItem>
            <MenuItem value="Popular">Popular</MenuItem>
          </Select>
        </FormControl>
      </StickyTabsWrapper>

      <motion.div
        id="resources-content"
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ResourceList activeTab={activeTab} />
      </motion.div>
    </BlogContainer>
  );
};

export default ResourceTabs;
