import { Grid, Box, Typography, Container } from "@mui/material";
import {
  MeasureWrapper,
  SectionContainer,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { motion } from "framer-motion";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const stats = [
  {
    value: "$1.5M+",
    title: "Annual Recovery",
    description: "Average annual recovery per facility from variance detection",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    value: "99.9%",
    title: "Payment Accuracy",
    description: "Every payment checked against contract terms",
    icon: <VerifiedOutlinedIcon />,
  },
  {
    value: "24 Hours",
    title: "Detection Time",
    description: "From payment receipt to underpayment identification",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "85%",
    title: "Appeal Success",
    description: "Contract-based appeals with documented evidence",
    icon: <TrendingUpOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <SectionContainer sx={{ 
      py: { xs: 6, md: 8 }, 
      background: "#fff", 
      borderRadius: "0px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* ORGANIC DECORATION */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(107, 191, 89, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(244, 122, 32, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MeasureWrapper>
          <Box sx={{ mb: 8, textAlign: "center" }}>
             <SectionTitle
                pillIcon={paymentImage9}
                pillText="Contract Accuracy Guaranteed"
                title="Measurable Results"
                subtitle="Real outcomes from healthcare organizations using the iCAN™ Contract Analysis solution"
                align="center"
                maxWidth={700}
             />
          </Box>

          <Box sx={{ position: "relative" }}>
             <Grid container spacing={6} justifyContent="center">
               {stats.map((stat, index) => (
                 <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.15 }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                       <Box sx={{ 
                         textAlign: "center",
                         position: "relative",
                         p: 2,
                         "&:hover .stat-icon": {
                            transform: "scale(1.1) rotate(5deg)",
                            color: "#fff",
                            background: "#F47A20"
                         }
                       }}>
                          <Box 
                            className="stat-icon"
                            sx={{ 
                            width: "56px", 
                            height: "56px", 
                            mx: "auto", 
                            mb: 3,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6BBF59",
                            background: "rgba(107, 191, 89, 0.1)",
                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            "& svg": { fontSize: "1.8rem" }
                          }}>
                             {stat.icon}
                          </Box>
                          
                          <Typography variant="h2" fontWeight={950} sx={{ 
                            color: "#111827", 
                            mb: 1,
                            fontSize: { xs: "2.5rem", md: "3.2rem" },
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            background: "linear-gradient(180deg, #111827 30%, #4B5563 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          }}>
                             {stat.value}
                          </Typography>
                          
                          <Typography variant="h6" fontWeight={800} sx={{ 
                            color: "#F47A20", 
                            mb: 2,
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                            fontSize: "0.80rem",
                            lineHeight: 1.2
                          }}>
                             {stat.title}
                          </Typography>
                          
                          <Typography sx={{ 
                            color: "#4B5563", 
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            fontWeight: 500,
                            maxWidth: "200px",
                            mx: "auto"
                          }}>
                             {stat.description}
                          </Typography>
                       </Box>
                    </motion.div>
                 </Grid>
               ))}
             </Grid>
          </Box>
        </MeasureWrapper>
      </Container>
    </SectionContainer>
  );
};

export default MeasurableResultsSection;
