import { Grid, Box, Typography, Container } from "@mui/material";
import { MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { motion } from "framer-motion";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

const stats = [
  {
    value: "60%",
    title: "Denial Reduction",
    description: "Proactive prevention eliminates denials before submission",
    icon: <ShieldOutlinedIcon />,
  },
  {
    value: "85%",
    title: "Appeal Success",
    description: "AI-generated appeals with evidence-based arguments",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
  {
    value: "3 Days",
    title: "Faster Turnaround",
    description:
      "Average Appeal Turnaround From denial receipt to appeal submission",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "2M+",
    title: "Annual Recovery",
    description:
      "Average Annual Recovery Per facility from improved denial management",
    icon: <PaymentsOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <SectionContainer
      sx={{
        py: { xs: 6, md: 8 },
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ORGANIC DECORATION */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(244, 122, 32, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(107, 191, 89, 0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MeasureWrapper>
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <SectionTitle
              pillIcon={paymentImage9}
              pillText="ROI Guaranteed Results"
              title="Measurable Results"
              subtitle="Real outcomes from healthcare organizations using the iCAN™ Denial Workflow solution"
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
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        p: 2,
                        "&:hover .stat-icon": {
                          transform: "scale(1.1) rotate(-5deg)",
                          color: "#fff",
                          background: "#6BBF59",
                        },
                      }}
                    >
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
                          color: "#F47A20",
                          background: "rgba(244, 122, 32, 0.1)",
                          transition:
                            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                          "& svg": { fontSize: "1.8rem" },
                        }}
                      >
                        {stat.icon}
                      </Box>

                      <Typography
                        variant="h2"
                        fontWeight={950}
                        sx={{
                          color: "#111827",
                          mb: 1,
                          fontSize: { xs: "2.5rem", md: "3.2rem" },
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                          background:
                            "linear-gradient(180deg, #111827 30%, #4B5563 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight={800}
                        sx={{
                          color: "#6BBF59",
                          mb: 2,
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          fontSize: "0.80rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4B5563",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 500,
                          maxWidth: "200px",
                          mx: "auto",
                        }}
                      >
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
