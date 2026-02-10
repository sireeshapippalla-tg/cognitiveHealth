import { useState } from "react";
import { Container, MenuItem, Select, FormControl } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ResourceList from "../resourceList/ResourceList";
import { StyledTabs, StyledTab, FilterContainer } from "./ResourceTabs.styles";

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
            icon={<BookOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Blog"
          />
          <StyledTab
            icon={<DescriptionOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Case Studies"
          />
          <StyledTab
            icon={<PlayCircleOutlineIcon fontSize="small" />}
            iconPosition="start"
            label="Videos"
          />
          <StyledTab
            icon={<ArticleOutlinedIcon fontSize="small" />}
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
                bgcolor: '#fff',
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
