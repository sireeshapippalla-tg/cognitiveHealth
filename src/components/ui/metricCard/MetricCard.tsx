import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  title?: string;
  description: string;
  icon?: ReactNode;
  color?: string;
}

export const MetricCard = ({
  value,
  title,
  description,
  icon,
  color = "#6BBF59",
}: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Box sx={{ 
      position: "relative",
      p: 4,
      textAlign: "center",
      "&:hover .metric-val": { transform: "translateY(-5px)" }
    }}>
      {/* Background Accent Number */}
      <Typography
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "6rem",
          fontWeight: 950,
          color: "rgba(255, 255, 255, 0.05)",
          zIndex: 0,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        {value.replace(/[^0-9]/g, "")}
      </Typography>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ 
          fontSize: "3rem", 
          mb: 0, 
          color, 
          opacity: 0.8,
          display: "flex",
          justifyContent: "center"
        }}>
          {icon}
        </Box>
        
        <Typography
          className="metric-val"
          variant="h2"
          fontWeight={950}
          sx={{
            color: "#fff",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.1,
            mb: 1,
            transition: "transform 0.3s ease",
            textShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          {value}
        </Typography>

        {title && (
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              color: color,
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              mb: 2
            }}
          >
            {title}
          </Typography>
        )}

        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 500,
            maxWidth: "200px",
            mx: "auto"
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);
