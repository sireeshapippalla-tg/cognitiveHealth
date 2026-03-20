import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useCountUp from "../useCountUp";

interface StatCardProps {
  value: string;
  title: string;
  description: string;
  index?: number;
}

const StatCard = ({ value, title, description, index = 0 }: StatCardProps) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const count = useCountUp(isInView ? numericValue : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: "20px",
          background: "linear-gradient(180deg, #fff, #f9fafb)",
          border: "1px solid #E5E7EB",

          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",

          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
          },

        //   "&::before": {
        //     content: '""',
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "4px",
        //     borderTopLeftRadius: "20px",
        //     borderTopRightRadius: "20px",
        //     background:
        //       "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
        //   },
        }}
      >
        {/* VALUE */}
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "2.8rem" },
            padding:"10px",
            fontWeight: 900,
            background:
              "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {value.includes("~") ? "~0%" : `${count.toFixed(1)}%`}
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "15px",
            fontWeight: 700,
            color: "#F47A20",
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography sx={{ mt: 1, color: "#6B7280", minHeight: "48px" }}>
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default StatCard;