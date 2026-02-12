import { useState } from "react";
import { Container, MenuItem, Select, FormControl } from "@mui/material";
import ResourceList from "../resourceList/ResourceList";
import { StyledTabs, StyledTab, FilterContainer } from "./ResourceTabs.styles";
import BlogIcon from "../../../assets/Resources/Blog.svg";
import CaseStudyIcon from "../../../assets/Resources/Casestudy.svg";
import VideoIcon from "../../../assets/Resources/video.svg"
import MediaIcon from "../../../assets/Resources/Media.svg"

const ResourceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filter, setFilter] = useState("Filter By");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
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
          />
          <StyledTab
            icon={<img src={CaseStudyIcon} alt="Case Study Icon" width={16} height={16} />}
            iconPosition="start"
            label="Case Studies"
          />
          <StyledTab
            icon={<img src={VideoIcon} alt="Video Icon" width={16} height={16} />}
            iconPosition="start"
            label="Videos"
          />
          <StyledTab
            icon={<img src={MediaIcon} alt="Media Icon" width={16} height={16} />}
            iconPosition="start"
            label="Media"
          />
        </StyledTabs>

        <FormControl size="small" sx={{ minWidth: 120 }}>
           <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
                fontFamily: 'Inter',
                fontSize: '14px',
                bgcolor: '#fff',
                color: '#656565',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E5E7EB',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D1D5DB',
                },
                 typography: 'body2',
                 fontWeight: 500
            }}
          >
            <MenuItem value="Filter By">Filter By</MenuItem>
            <MenuItem value="Recent">Recent</MenuItem>
            <MenuItem value="Popular">Popular</MenuItem>
          </Select>
        </FormControl>
      </FilterContainer>

      <ResourceList activeTab={activeTab} />
    </Container>
  );
};

export default ResourceTabs;
