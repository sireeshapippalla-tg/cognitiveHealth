import React from "react";
import SplitSection from "../ui/SplitSection/SplitSection";
import heroSectionImage from "../../assets/HomeScreen.svg";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../ui/SplitSection/SplitSection.styles";
import { Box, Typography } from "@mui/material";

const AboutUsHeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="iCAN™ ONE"
      eyebrow={
        <Box display="flex" flexDirection="column">

          {/* Top Line */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontWeight="bold"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                lineHeight: 1.2,
                // // letterSpacing: "-0.02em",
                // mb: 2.5,
                color: "#1F2937",
              }}>
              About
            </Typography>

            <Highlight>
              CognitiveHealth
            </Highlight>
          </Box>

          {/* Bottom Line */}
          <Typography fontWeight="bold"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
              lineHeight: 1.2,
              // letterSpacing: "-0.02em",
              mb: 2.5,
              color: "#1F2937",
            }}>
            Agentic AI platform instead of Intelligent Process Automation
          </Typography>

        </Box>
      }
      description="Deploy a network of specialized AI agents that automate your most complex RCM workflows—reducing costs by up to 80% while accelerating cash flow and empowering your team to deliver exceptional patient experiences."
      // description="Deploy a purpose-built AI agent platform designed to automate..."
      image={heroSectionImage}
      primaryAction={{
        label: "Request a Demo",
        onClick: () => navigate("/contact-us"),
      }}
      secondaryAction={{
        label: "See Platform in Action",
        onClick: () => navigate("/resources#videos")
      }}
    />
  );
};

export default AboutUsHeroSection;
