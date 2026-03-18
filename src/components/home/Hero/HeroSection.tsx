// import careLogo from "../../../assets/care.svg";

import kaminLogo from "../../../assets/Kamin Logo.svg";
// import mcLeranLogo from "../../../assets/mcLeran.svg";
// import mercyLogo from "../../../assets/Mercylogo.svg";
import mindPathLogo from "../../../assets/mindpath-logo.svg";
// import qualityLogo from "../../../assets/Quality.svg";
import mercyImg from "../../../assets/Resources/mercyLogo.png";
import yaleImg from "../../../assets/yale.svg";

import heroSectionImage from "../../../assets/HomeScreen.svg";
import { useNavigate } from "react-router-dom";
import TrustedLogos from "../../trustedLogos/TrustedLogos";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
const HeroSection = () => {
  const navigate = useNavigate();
  const logos = [
    {
      src: "https://www.carehospice.com/images/care-logo.gif",
      alt: "Care Hospice",
    },
    {
      src: "https://www.mclaren.org/uploads/images/mclaren-logo-color.svg",
      alt: "McLaren Health",
    },
    { src: yaleImg, alt: "Yale New Haven Health" },
    {
      src: "https://azure-na-images.contentstack.com/v3/assets/blt3667c0ff4b42a45d/bltec3bcf779857babf/6698b9d4da94e2baeab2d9d7/wellstreet_logo.svg",
      alt: "Wellstreet",
    },
    {
      src: "https://cdn.prod.website-files.com/61f01ea80c2c4a11c10e6cc3/6810dedbaa06e55034a38ee3_QHCR_horizontal%20logo%20(1)-p-500.png",
      alt: "Quality Health Care",
    },
    { src: kaminLogo, alt: "Kamin Health" },
    { src: mindPathLogo, alt: "MindPath Health" },
    { src: mercyImg, alt: "Mercy Health" },
  ];
  return (
    <>
      {/* <SplitSection
        eyebrow={
          <>
            Transform Your Revenue Cycle with{" "}
            <Highlight>Autonomous AI Agents</Highlight>
          </>
        }
        description="Deploy a network of specialized AI agents that automate your most
              complex RCM workflows—reducing costs by up to 80% while
              accelerating cash flow and empowering your team to deliver
              exceptional patient experiences."
        image={heroSectionImage}
        primaryAction={{
          label: "Request a Demo",
          onClick: () => navigate("/contact-us"),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => navigate("/resources#videos"),
        }}
      /> */}

      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: 12,
          position: "relative",
          overflow: "hidden",
          background: "#F9FAFB",
        }}
      >
        {/* 🔥 FLOATING BACKGROUND BLOBS */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            background: "radial-gradient(circle, #F47A20, transparent)",
            filter: "blur(120px)",
            top: "-80px",
            left: "-80px",
            opacity: 0.2,
          }}
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            background: "radial-gradient(circle, #6BBF59, transparent)",
            filter: "blur(120px)",
            bottom: "-80px",
            right: "-80px",
            opacity: 0.2,
          }}
        />

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          {/* 🔥 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* HEADLINE */}
            <Typography
              // Changed to h1 for semantic meaning
              fontWeight="bold"
              sx={{
                mb: 3,
                color: "#1F2937",
                lineHeight: 1.3,
                letterSpacing: "-0.02em",

                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Transform Your Revenue Cycle with{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 5s linear infinite",
                  backgroundSize: "200% auto",
                }}
              >
                Autonomous AI Agents
              </Box>
            </Typography>

            {/* SUBTEXT */}
            <Typography
              sx={{
                color: "#6B7280",
                mb: 5,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
                maxWidth: "600px", // Slightly increased max width for bigger text
              }}
            >
              Deploy a network of specialized AI agents that automate your most
              complex RCM workflows—reducing costs by up to 80% while
              accelerating cash flow and empowering your team to deliver
              exceptional patient experiences.
            </Typography>

            {/* BUTTONS */}
            <Box display="flex" gap={2} flexWrap="wrap">
              {/* PRIMARY */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 1.6,
                    borderRadius: "40px",
                    fontWeight: "bold",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    background: "#F47A20",
                    // background:
                    //   "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",

                    boxShadow: "0 10px 25px rgba(244,122,32,0.3)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-80%",
                      width: "60%",
                      height: "100%",
                      background:
                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                      transform: "skewX(-20deg)",
                    },

                    "&:hover::after": {
                      left: "130%",
                      transition: "0.7s",
                    },
                  }}
                  onClick={() => navigate("/contact-us")}
                >
                  Request a Demo
                </Button>
              </motion.div>

              {/* SECONDARY */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  onClick={() => navigate("/resources#videos")}
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 1.6,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontWeight: 500,
                    borderColor: "#F47A20",
                    color: "#F47A20",

                    "&:hover": {
                      background: "rgba(107,191,89,0.1)",
                      borderColor: "#F47A20",
                    },
                  }}
                >
                  See Platform in Action
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          {/* 🔥 RIGHT DASHBOARD (FLOATING + DEPTH) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ rotate: 1 }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                transform: "perspective(1000px) rotateX(3deg)",
              }}
            >
              <img
                src={heroSectionImage}
                alt="dashboard"
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* 🔥 GRADIENT ANIMATION KEYFRAMES */}
        <style>
          {`
          @keyframes gradientMove {
            0% { background-position: 0% }
            100% { background-position: 200% }
          }
        `}
        </style>
      </Box>
      {/* TRUSTED BY */}
      <TrustedLogos
        title="Trusted by leading health systems and physician groups and specialty providers"
        logos={logos}
        speed={40}
      />
    </>
  );
};

export default HeroSection;
