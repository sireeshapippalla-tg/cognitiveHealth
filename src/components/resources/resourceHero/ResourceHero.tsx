import { InputBase, IconButton, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Hero, Title, Subtitle, SearchWrapper } from "./ResourceHero.styles";
import { styled } from "@mui/material/styles";

const StyledInput = styled(InputBase)({
    flex: 1,
    marginLeft: "16px",
    fontSize: "16px",
});

const SearchButton = styled(IconButton)({
    backgroundColor: "#E88D3E", // Orange
    color: "white",
    padding: "8px",
    "&:hover": {
        backgroundColor: "#d67d2e",
    }
})

const ResourceCenterChip = styled(Chip)({
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB", 
    borderRadius: "16px",
    fontWeight: 600,
    fontSize: "12px",
    marginBottom: "24px"
})

const ResourceHero = () => (
  <Hero>
    <ResourceCenterChip label="Resource Center" size="small" />
    <Title variant="h3">Insights, Innovation & Impact</Title>
    <Subtitle>
      Discover the latest trends, thought leadership, and success stories in healthcare revenue cycle automation
    </Subtitle>

    <SearchWrapper>
      <StyledInput 
        placeholder="Search resources..." 
        inputProps={{ 'aria-label': 'search resources' }}
      />
      <SearchButton type="button" aria-label="search">
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  </Hero>
);

export default ResourceHero;
