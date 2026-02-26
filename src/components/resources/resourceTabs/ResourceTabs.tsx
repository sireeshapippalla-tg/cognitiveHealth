import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuItem,
  Select,
  FormControl,
  type SelectChangeEvent,
} from "@mui/material";
import ResourceList from "../resourceList/ResourceList";
import {
  StyledTabs,
  StyledTab,
  FilterContainer,
  BlogContainer,
} from "./ResourceTabs.styles";
import BlogIcon from "../../../assets/Resources/Blog.svg";
import CaseStudyIcon from "../../../assets/Resources/Casestudy.svg";
import VideoIcon from "../../../assets/Resources/video.svg";
import MediaIcon from "../../../assets/Resources/media.svg";

const ResourceTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabHashMap = ["blog", "case-study", "videos", "media"];

  const activeTab = tabHashMap.indexOf(
    location.hash.replace("#", "") || "blog",
  );

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(`/resources#${tabHashMap[newValue]}`, { replace: true });
  };

  const [filter, setFilter] = useState("Filter By");

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <BlogContainer>
      <FilterContainer>
        <StyledTabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="resource tabs"
        >
          <StyledTab
            icon={<img src={BlogIcon} alt="Blog Icon" width={16} height={16} />}
            iconPosition="start"
            label="Blog"
            id="blog"
          />
          <StyledTab
            icon={
              <img
                src={CaseStudyIcon}
                alt="Case Study Icon"
                width={16}
                height={16}
                id="case-study"
              />
            }
            iconPosition="start"
            label="Case Studies"
          />
          <StyledTab
            icon={
              <img src={VideoIcon} alt="Video Icon" width={16} height={16} />
            }
            iconPosition="start"
            label="Videos"
            id="videos"
          />
          <StyledTab
            icon={
              <img src={MediaIcon} alt="Media Icon" width={16} height={16} />
            }
            iconPosition="start"
            label="Media"
            id="media"
          />
        </StyledTabs>

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
      </FilterContainer>

      <ResourceList activeTab={activeTab} />
    </BlogContainer>
  );
};

export default ResourceTabs;
