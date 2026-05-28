import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

import {
  Hero,
  HeroContent,
  Title,
  SubTitle,
  SearchWrapper,
  // ResourceCenterChip,
  StyledInput,
  SearchButton,
  BackgroundShapes,
  Shape,
  Description,
} from "./ResourceHero.styles";

interface ResourceHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ResourceHero = ({ searchQuery, setSearchQuery }: ResourceHeroProps) => (
  <Hero>
    <BackgroundShapes>
      <Shape
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        sx={{
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(235, 123, 51, 0.15) 0%, transparent 70%)",
        }}
      />
      <Shape
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        sx={{
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          height: "70%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />
    </BackgroundShapes>

    <HeroContent>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <ResourceCenterChip label="Resource Center" size="small" /> */}
        <Title>Intelligent Process Automation Platform.</Title>
        <SubTitle>Purpose-built for Healthcare</SubTitle>
        <Description>
          iCAN™ (Integrated Cognitive Automation Neuron) is a versatile
          healthcare automation platform. iCAN™ leverages artificial
          intelligence and machine learning to automate increasingly complex
          business processes.
        </Description>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SearchWrapper>
          <SearchIcon sx={{ color: "#94a3b8", ml: 1 }} />
          <StyledInput
            placeholder="Search resources, articles, videos..."
            inputProps={{ "aria-label": "search resources" }}
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
          <SearchButton type="button" aria-label="search">
            Search
          </SearchButton>
        </SearchWrapper>
      </motion.div>
    </HeroContent>
  </Hero>
);

export default ResourceHero;
