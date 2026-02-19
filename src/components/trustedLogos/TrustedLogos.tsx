import React from "react";
import {
  TrustSection,
  TrustTitle,
  LogoScrollWrapper,
  LogoTrack,
  LogoGrid,
  LogoImage,
} from "./TrustedLogos.styles";
import { Box } from "@mui/material";

interface LogoItem {
  src: string;
  alt: string;
}

interface TrustedLogosProps {
  title?: string;
  logos: LogoItem[];
  speed?: number; // animation duration in seconds
}

const TrustedLogos: React.FC<TrustedLogosProps> = ({
  title,
  logos,
  speed = 40,
}) => {
  return (
    <TrustSection>
      {title && <TrustTitle>{title}</TrustTitle>}

      <LogoScrollWrapper>
        <LogoTrack style={{ animationDuration: `${speed}s` }}>
          {[...Array(2)].map((_, index) => (
            <LogoGrid key={index}>
              {/* {logos.map((logo, i) => (
                <LogoImage key={i} src={logo.src} alt={logo.alt} />
              ))} */}
              {logos.map((logo, i) => {
                const isAvaility = logo.alt === "AVAILITY";

                return (
                  <Box
                    key={i}
                    sx={{
                      margin: "0 30px",
                      // padding: isAvaility ? "10px 14px" : 0,
                      backgroundColor: isAvaility ? "#163B65" : "transparent",
                      borderRadius: isAvaility ? "8px" : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LogoImage src={logo.src} alt={logo.alt} />
                  </Box>
                );
              })}
            </LogoGrid>
          ))}
        </LogoTrack>
      </LogoScrollWrapper>
    </TrustSection>
  );
};

export default TrustedLogos;
