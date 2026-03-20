import { Grid, Box, Typography, Container } from "@mui/material";
// import { MetricCard } from "../../ui/metricCard/MetricCard";
import {
  MeasureWrapper,
  SectionContainer,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { motion } from "framer-motion";

import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import useCountUp from "../../ui/useCountUp";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  {
    value: "93.8%",
    title: "Fully Reconciled Payments",
    description: "Industry-leading reconciliation accuracy",
    icon: <TaskAltOutlinedIcon />,
  },
  {
    value: "~0%",
    title: "Posting Errors",
    description: "Virtually zero error rate with AI automation",
    icon: <ShieldOutlinedIcon />,
  },
  {
    value: "41.6%",
    title: "Faster Turnaround",
    description: "Dramatic reduction in processing time",
    icon: <BoltOutlinedIcon />,
  },
  {
    value: "26%",
    title: "Faster Cash Application",
    description: "Accelerated revenue recognition",
    icon: <MonetizationOnOutlinedIcon />,
  },
];
const StatCard = ({ stat, index }: any) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ""));

  const count = useCountUp(isInView ? numericValue : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Box
        // sx={{
        //   textAlign: "center",
        //   p: 4,
        //   borderRadius: "20px",
        //   background: "linear-gradient(180deg, #fff, #f9fafb)",
        //   border: "1px solid #E5E7EB",
        //   transition: "0.3s",

        //   "&:hover": {
        //     transform: "translateY(-10px)",
        //     boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
        //   },
        // }}
         sx={{
    textAlign: "center",
    p: 2,
    borderRadius: "20px",
    background: "linear-gradient(180deg, #fff, #f9fafb)",
    border: "1px solid #E5E7EB",

    width: "100%",        // ✅ full width
    height: "100%",       // ✅ equal height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",  // ✅ evenly spaced

    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
    },
  }}
      >
        {/* VALUE */}
        <Typography
          sx={{
            padding:"10px",
            fontSize: { xs: "2.2rem", md: "2.8rem" },
            fontWeight: 900,
            background:
              "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stat.value.includes("~")
            ? "~0%"
            : `${count.toFixed(1)}%`}
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "16px",
            fontWeight: 700,
            color: "#F47A20",
            // letterSpacing: "0.1em",
          }}
        >
          {stat.title}
        </Typography>

        {/* DESC */}
        <Typography sx={{ mt: 1, color: "#6B7280",  minHeight: "48px", }}>
          {stat.description}
        </Typography>
      </Box>
    </motion.div>
  );
};
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
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(107, 191, 89, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(244, 122, 32, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MeasureWrapper>
          <Box sx={{ mb: 8, textAlign: "center" }}>
             <SectionTitle
                pillIcon={paymentImage9}
                pillText="Outcome-Focused Innovation"
                title="Measurable Results"
                subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
                align="center"
                maxWidth={700}
             />
          </Box>

          {/* ORGANIC CLUSTER DESIGN */}
          <Box sx={{ position: "relative" }}>
             <Grid container spacing={6} justifyContent="center">
               {/* {stats.map((stat, index) => (
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
                            fontSize: "0.8rem",
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
               ))} */}
               {stats.map((stat, index) => (
  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}   sx={{ display: "flex" }} >
    <StatCard stat={stat} index={index} />
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
