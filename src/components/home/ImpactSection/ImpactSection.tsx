// import { Grid } from "@mui/material";
// import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
// import { MetricCard } from "../../ui/metricCard/MetricCard";
// import { SectionContainer, Wrapper } from "./ImpactSection.styles";

// const stats = [
//   {
//     value: "93.8%",
//     description: "Fully Reconciled Payments - Virtually Zero Posting Errors",
//   },
//   {
//     value: "41.6%",
//     description: "Faster Turnaround Time - From 3-5 Days To Under 4 Hours",
//   },
//   {
//     value: "85%",
//     description: "Staff Savings - Efforts Re-Directed To Value Added Tasks",
//   },
//   {
//     value: "26%",
//     description: "Faster Cash Application - Improved A/R and Cash Flow",
//   },
// ];

// const ImpactSection = () => {
//   return (
//     <SectionContainer>
//       <Wrapper>
//         <SectionTitle
//           pillText="Proven Results That Matter"
//           title="Real Impact Across Every Dimension Of Revenue<br/>Cycle Performance"
//           maxWidth={800}
//         />
//         <Grid container spacing={3}>
//           {stats.map((stat, index) => (
//             <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//               <MetricCard value={stat.value} description={stat.description} color="#EB7724" />
//             </Grid>
//           ))}
//         </Grid>
//       </Wrapper>
//     </SectionContainer>
//   );
// };

// export default ImpactSection;

import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import useCountUp from "../../ui/useCountUp";

const data = [
  {
    value: 93.8,
    title: "Fully Reconciled Payments Virtually Zero Posting Errors",
    desc: "Fully Reconciled Payments - Virtually Zero Posting Errors",
    color: "#F47A20",
  },
  {
    value: 41.6,
    title: "Faster Turnaround Time",
    desc: "Faster Turnaround Time - From 3-5 Days To Under 4 Hours",
    color: "#6BBF59",
  },
  {
    value: 85,
    title: "Staff Savings",
    desc: "Staff Savings - Efforts Re-Directed To Value Added Tasks",
    color: "#4A90E2",
  },
  {
    value: 26,
    title: "Faster Cash Application",
    desc: "Faster Cash Application - Improved A/R and Cash Flow",
    color: "#F47A20",
  },
];

const ImpactSection = () => {
  return (
    <Box
      sx={{
        px: 5,
        py: 10,
        background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          sx={{
            display: "inline-block",
            px: 3,
            py: 1,
            borderRadius: "20px",
            background: "linear-gradient(90deg,#F47A20,#6BBF59,#4A90E2)",
            color: "#fff",
            fontSize: "12px",
            mb: 2,
          }}
        >
          Proven Results That Matter
        </Typography>

        <Typography variant="h4" fontWeight="bold">
          Real Impact Across Every Dimension Of Revenue
          <br />
          Cycle Performance
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px,1fr))"
        gap={4}
      >
        {data.map((item, index) => (
          <StatCard key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

const StatCard = ({ item }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (item.value / 100) * circumference;
  const count = useCountUp(inView ? item.value : 0, 2000);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${item.color}20` }}
      style={{
        position: "relative",
        borderRadius: "20px",
        padding: "30px",
        background: "rgba(255,255,255,1)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Glow effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top, ${item.color}11, transparent)`,
          opacity: 0,
          transition: "0.4s",
          ".MuiBox-root:hover &": { opacity: 1 },
        }}
      />

      {/* Ring */}
      <Box
        display="flex"
        justifyContent="center"
        mb={2}
        sx={{ position: "relative" }} // ✅ IMPORTANT
      >
        <svg height={radius * 2} width={radius * 2}>
          {/* ✅ ADD HERE (top of svg) */}
          <defs>
            <linearGradient
              id={`gradient-${item.value}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F47A20" />
              <stop offset="50%" stopColor="#6BBF59" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            stroke="#f1f5f9"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Animated circle */}
          <motion.circle
            stroke={`url(#gradient-${item.value})`} // 👈 USE HERE
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            strokeDashoffset={inView ? strokeDashoffset : circumference}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{
              transition: "stroke-dashoffset 1.5s ease",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Number */}

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "26px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            pointerEvents: "none",
          }}
        >
          {count.toFixed(1)}%
        </Box>
      </Box>

      {/* Title */}
      <Typography fontWeight="bold" textAlign="center" color="#0f172a">
        {item.title}
      </Typography>

      {/* Hover Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <Typography
          variant="body2"
          textAlign="center"
          mt={1}
          sx={{ color: "#475569" }}
        >
          {item.desc}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default ImpactSection;
