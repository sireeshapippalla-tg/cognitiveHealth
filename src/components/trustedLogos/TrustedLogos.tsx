// import React from "react";
// import {
//   TrustSection,
//   TrustTitle,
//   LogoScrollWrapper,
//   LogoTrack,
//   LogoGrid,
//   LogoImage,
// } from "./TrustedLogos.styles";
// import { Box } from "@mui/material";

// interface LogoItem {
//   src: string;
//   alt: string;
// }

// interface TrustedLogosProps {
//   title?: string;
//   logos: LogoItem[];
//   speed?: number; // animation duration in seconds
// }

// const TrustedLogos: React.FC<TrustedLogosProps> = ({
//   title,
//   logos,
//   speed = 40,
// }) => {
//   return (
//     <TrustSection>
//       {title && <TrustTitle>{title}</TrustTitle>}

//       <LogoScrollWrapper>
//         <LogoTrack style={{ animationDuration: `${speed}s` }}>
//           {[...Array(2)].map((_, index) => (
//             <LogoGrid key={index}>
//               {/* {logos.map((logo, i) => (
//                 <LogoImage key={i} src={logo.src} alt={logo.alt} />
//               ))} */}
//               {logos.map((logo, i) => {
//                 const isAvaility = logo.alt === "AVAILITY";

//                 return (
//                   <Box
//                     key={i}
//                     sx={{
//                       margin: "0 30px",
//                       // padding: isAvaility ? "10px 14px" : 0,
//                       backgroundColor: isAvaility ? "#163B65" : "transparent",
//                       borderRadius: isAvaility ? "8px" : 0,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <LogoImage src={logo.src} alt={logo.alt} />
//                   </Box>
//                 );
//               })}
//             </LogoGrid>
//           ))}
//         </LogoTrack>
//       </LogoScrollWrapper>
//     </TrustSection>
//   );
// };

// export default TrustedLogos;

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
import { motion } from "framer-motion";

interface LogoItem {
  src: string;
  alt: string;
}

interface TrustedLogosProps {
  title?: string;
  logos: LogoItem[];
  speed?: number;
}

const TrustedLogos: React.FC<TrustedLogosProps> = ({
  title,
  logos,
  speed = 30,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <TrustSection>
        {title && <TrustTitle>{title}</TrustTitle>}

        <LogoScrollWrapper>
          <LogoTrack style={{ animationDuration: `${speed}s` }}>
            {[...Array(2)].map((_, index) => (
              <LogoGrid key={index}>
                {logos.map((logo, i) => (
                  <Box
                    key={i}
                    sx={{
                      borderRadius: "12px",
                      padding: "10px 18px",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      "&:hover": {
                        transform: "translateY(-6px) scale(1.05)",
                        background:
                          "linear-gradient(120deg, rgba(244,122,32,0.08), rgba(107,191,89,0.08))",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <LogoImage src={logo.src} alt={logo.alt} />
                  </Box>
                ))}
              </LogoGrid>
            ))}
          </LogoTrack>
        </LogoScrollWrapper>
      </TrustSection>
    </motion.div>
  );
};

export default TrustedLogos;
