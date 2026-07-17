import { useRef } from "react";
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
  Section,
  Title,
} from "./ImpactSection.style";

const data = [
  {
    value: 100,
    title: "Fully Reconciled Payments",
    desc: "Fully Reconciled Payments - Virtually Zero Posting Errors",
    color: "var(--color-primary)",
  },
  {
    value: 100,
    countTarget: 4,
    isMultiplier: true,
    title: "Faster Turnaround Time",
    desc: "Faster Turnaround Time - From 3-5 Days To Under 4 Hours",
    color: "var(--color-green)",
  },
  {
    value: 85,
    title: "Staff Savings",
    desc: "Staff Savings - Efforts Re-Directed To Value Added Tasks",
    color: "var(--color-text-blue)",
  },
  {
    value: 26,
    title: "Faster Cash Application",
    desc: "Faster Cash Application - Improved A/R and Cash Flow",
    color: "var(--color-primary)",
  },
];

const ImpactSection = () => {
  return (
    <Section>
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
    </Section>
  );
};

interface StatItem {
  value: number;
  countTarget?: number;
  isMultiplier?: boolean;
  title: string;
  desc: string;
  color: string;
}

const StatCard = ({ item }: { item: StatItem }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (item.value / 100) * circumference;
  const targetVal = item.countTarget !== undefined ? item.countTarget : item.value;
  const count = useCountUp(inView ? targetVal : 0, 2000);
  return (
    <MotionCard
      ref={ref}
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
              <stop offset="0%" stopColor="#eb7b33" />
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
            stroke={`url(#gradient-${item.value})`}
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

        <CenterText>
          {item.isMultiplier
            ? (inView ? `${Math.round(count)}x` : `${item.countTarget}x`)
            : (inView ? `${count.toFixed(1)}%` : `${item.value.toFixed(1)}%`)}
        </CenterText>
      </RingWrapper>

      {/* Title */}

      <CardTitle>{item.title}</CardTitle>

      {/* Hover Reveal */}

      <div>
        <CardDesc>
          {item.desc}
        </CardDesc>
      </div>
    </MotionCard>
  );
};

export default ImpactSection;
