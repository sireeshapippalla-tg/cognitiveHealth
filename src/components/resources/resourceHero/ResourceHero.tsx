import SearchIcon from "@mui/icons-material/Search";
import {
  Hero,
  Title,
  Subtitle,
  SearchWrapper,
  ResourceCenterChip,
  StyledInput,
  SearchButton,
} from "./ResourceHero.styles";

const ResourceHero = () => (
  <Hero>
    <ResourceCenterChip label="Resource Center" size="small" />
    <Title variant="h3">Insights, Innovation & Impact</Title>
    <Subtitle>
      Discover the latest trends, thought leadership, and success stories in
      healthcare revenue cycle automation
    </Subtitle>

    <SearchWrapper>
      <StyledInput
        placeholder="Search resources..."
        inputProps={{ "aria-label": "search resources" }}
      />
      <SearchButton type="button" aria-label="search">
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  </Hero>
);

export default ResourceHero;
