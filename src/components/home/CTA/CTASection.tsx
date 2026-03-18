// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import AppButton from "../../ui/appButton/AppButton";
// import { useNavigate } from "react-router-dom";

// import {
//   CtaWrapper,
//   CtaTitle,
//   CtaSubtitle,
//   CtaActions,
//   CtaTrustText,
//   PrimaryButtonStyles,
//   // OutlineButtonStyles,
//   SectionContainer
// } from "./CallToActionSection.styles";

// const CallToActionSection = () => {
//   const navigate = useNavigate();
//   return (
//     <SectionContainer>
//       <CtaWrapper>
//         <CtaTitle>Ready to Experience the CognitiveHealth Difference?</CtaTitle>

//         <CtaSubtitle>
//          See how our healthcare expertise, advanced AI technology, and partnership approach can transform your revenue cycle operations.
//         </CtaSubtitle>

//         <CtaActions direction={{ xs: "column", sm: "row" }} spacing={2}>
//           <AppButton
//             variantType="primary"
//             sx={PrimaryButtonStyles}
//             endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
//             onClick={() => navigate("/contact-us")}
//           >
//             Request a Demo
//           </AppButton>

//           <AppButton
//             variantType="outline"
//             showBorder={true}
//             // sx={OutlineButtonStyles}
//             endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
//             onClick={() => navigate("/resources#videos")}
//           >
//             See Platform in Action
//           </AppButton>

//         </CtaActions>
//          <CtaTrustText>
//           Join 50+ healthcare organizations who trust CognitiveHealth to process 10M+ claims monthly.
//         </CtaTrustText>
//       </CtaWrapper>
//     </SectionContainer>
//   );
// };

// export default CallToActionSection;


import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 10,
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #1a233a, #020617)",
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "24px",
          p: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",

          // 🔥 Glass effect
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.1)",

          // 🔥 Gradient border glow
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            padding: "1px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #F47A20, #6BBF59, #4A90E2)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
        }}
      >
        {/* 🔥 Floating Glow */}
        <Box
          sx={{
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "#F47A20",
            filter: "blur(120px)",
            top: "-50px",
            left: "-50px",
            opacity: 0.2,
          }}
        />

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#fff" }}
        >
          Ready to Experience the CognitiveHealth Difference?
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "#A0AEC0",
            maxWidth: "600px",
            margin: "0 auto",
            mb: 4,
          }}
        >
          See how our healthcare expertise, advanced AI technology, and
          partnership approach can transform your revenue cycle operations.
        </Typography>

        {/* Buttons */}
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          {/* Primary Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: "bold",
                textTransform: "none",
                background:
                  "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
                boxShadow: "0 10px 25px rgba(244,122,32,0.4)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
                  boxShadow: "0 15px 35px rgba(74,144,226,0.5)",
                },
              }}
            >
              Request a Demo
            </Button>
          </motion.div>

          {/* Secondary Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.3)",
                "&:hover": {
                  borderColor: "#6BBF59",
                  background: "rgba(255,255,255,0.05)",
                },
              }}
            >
              See Platform in Action
            </Button>
          </motion.div>
        </Box>

        {/* Footer Text */}
        <Typography
          sx={{
            mt: 4,
            fontSize: "14px",
            color: "#718096",
          }}
        >
          Join 50+ healthcare organizations who trust CognitiveHealth to process
          10M+ claims monthly.
        </Typography>
      </Box>
    </Box>
  );
};

export default CTASection;