import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Compatibility from "../../assets/Platform/ProductIntellijence/Compatibility.svg";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ErrorOutlineIcon sx={{ fontSize: 40 }} />,
    title: "Operational Complexity",
    description: "Healthcare revenue cycle operations involve countless manual tasks, exceptions, and edge cases that slow down teams and increase costs.",
  },
  {
    icon: <Box component="img" src={Compatibility} alt="Compatibility" sx={{ width: 40, height: 40 }} />,
    title: "Fragmented Systems and Data",
    description: "Disconnected systems, inconsistent data formats, and lack of integration create inefficiencies and limit visibility across the revenue cycle.",
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: 40 }} />,
    title: "Staffing Shortages",
    description: "Healthcare organizations face persistent challenges recruiting and retaining skilled revenue cycle staff, making automation critical.",
  },
  {
    icon: <TrendingDownIcon sx={{ fontSize: 40 }} />,
    title: "Rising Costs and Slower Cash Flow",
    description: "Manual processes, errors, and delays lead to higher operating costs, extended AR days, and reduced cash flow performance.",
  },
];

const WhyWeExistSection = () => {
  return (
    <Box sx={{ 
      py: { xs: 12, md: 18 }, 
      background: "#fff", 
      position: "relative",
      overflow: "hidden" 
    }}>
      {/* Background abstract element */}
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120%",
        height: "100%",
        background: "radial-gradient(circle at center, #F9FAFB 0%, transparent 70%)",
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={10} alignItems="center">
          {/* LEFT: CONTENT FOCUS */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "#F47A20",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  mb: 2,
                  display: "block"
                }}
              >
                The Challenge
              </Typography>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  mb: 4,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#111827",
                  lineHeight: 1.1
                }}
              >
                Why Healthcare <br />
                Needs <Box component="span" sx={{ color: "#F47A20" }}>AI Agents</Box>
              </Typography>
              <Typography
                sx={{
                  color: "#4B5563",
                  fontSize: "1.2rem",
                  lineHeight: 1.7,
                  mb: 4
                }}
              >
                Traditional approaches are no longer enough. Healthcare organizations face unprecedented operational hurdles that demand a new category of intelligent automation.
              </Typography>
              <Box sx={{ 
                width: "60px", 
                height: "6px", 
                background: "#6BBF59", 
                borderRadius: "3px" 
              }} />
            </motion.div>
          </Grid>

          {/* RIGHT: UNIQUE FEATURE FLOW */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ 
                    display: "flex", 
                    gap: 4, 
                    alignItems: "flex-start",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(15px)"
                    }
                  }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: "80px",
                        height: "80px",
                        borderRadius: "24px",
                        background: "rgba(244, 122, 32, 0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#F47A20",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        sx={{ mb: 1.5, color: "#1F2937", fontSize: "1.5rem" }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{ 
                          color: "#6B7280", 
                          fontSize: "1.1rem", 
                          lineHeight: 1.6,
                          maxWidth: "500px"
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyWeExistSection;
