import { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import useCountUp from "../../ui/useCountUp";
import {
  CardDesc,
  CardTitle,
  CenterText,
  Glow,
  GridWrapper,
  Header,
  MotionCard,
  Pill,
  RingWrapper,
  Title,
} from "./ImpactSection.styles";

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
        px: { xs: 2, md: 5 },
        py: { xs: 6, md: 8 },
        background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
        color: "#0f172a",
      }}
    >
      {/* Header */}

      <Header>
        <Pill>Proven Results That Matter</Pill>

        <Title>
          Real Impact Across Every Dimension Of Revenue
          <br />
          Cycle Performance
        </Title>
      </Header>

      {/* Cards */}

      <GridWrapper>
        {data.map((item, index) => (
          <StatCard key={index} item={item} />
        ))}
      </GridWrapper>
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
    <MotionCard
      ref={ref}
      whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${item.color}20` }}
    >
      {/* Glow effect */}

      <Glow color={item.color} />

      {/* Ring */}

      <RingWrapper>
        <svg height={radius * 2} width={radius * 2}>
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

        <CenterText>{count.toFixed(1)}%</CenterText>
      </RingWrapper>

      {/* Title */}

      <CardTitle>{item.title}</CardTitle>

      {/* Hover Reveal */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <CardDesc>{item.desc}</CardDesc>
      </motion.div>
    </MotionCard>
  );
};

export default ImpactSection;
