import { Box, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import StatCard from "../statCard/StatCard";
import { SectionTitle } from "../sectionTitle/SectionTitle";

interface StatItem {
  value: string;
  title: string;
  description: string;
}

interface MetricsSectionProps {
  title: string;
  subtitle: string;
  pillText?: string;
  pillIcon?: string;
  stats: StatItem[];
}

const MetricsSection = ({
  title,
  subtitle,
  pillText,
  pillIcon,
  stats,
}: MetricsSectionProps) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "rgb(234, 88, 12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(107,191,89,0.1), transparent)",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* 🔥 HEADER */}
        <Box textAlign="center" mb={8}>
          <SectionTitle
            pillText={pillText}
            pillIcon={pillIcon}
            title={title}
            subtitle={subtitle}
            align="center"
            maxWidth={700}
            textColor="white"
          />
        </Box>

        {/* 🔥 GRID */}
        <Grid container spacing={6} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <StatCard
                value={stat.value}
                title={stat.title}
                description={stat.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsSection;