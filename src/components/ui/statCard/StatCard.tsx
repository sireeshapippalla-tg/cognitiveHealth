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

  //  Extract numeric value
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const hasPercent = value.includes("%");
  const hasText = /[a-zA-Z]/.test(value);
  const isRange = value.includes("-"); // ✅ FIX for 2-4%
  const isPureText = hasText && isNaN(numericValue);

  //  Animate only valid numbers
  const count = useCountUp(
    isInView && !isNaN(numericValue) ? numericValue : 0,
    2000,
  );

  //  Split number + text
  const numberPart = value.replace(/[^\d.]/g, "");
  const textPart = value.replace(/[\d.]/g, "").trim();

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
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 1.5,

          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/*  VALUE */}
        <Box
          sx={{
            minHeight: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isRange ? (
            // ✅ RANGE VALUE
            <Typography
              sx={{
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {value}
            </Typography>
          ) : isPureText ? (
            // ✅ PURE TEXT
            <Typography
              sx={{
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                fontWeight: 900,
                lineHeight: 1.2,
                textAlign: "center",
                background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {value}
            </Typography>
          ) : hasText ? (
            // ✅ MIXED
            <Box display="flex" alignItems="baseline" gap={0.5}>
              <Typography
                sx={{
                  fontSize: { xs: "2.2rem", md: "2.8rem" },
                  fontWeight: 900,
                  lineHeight: 1,
                  background:
                    "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {numberPart}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 700,
                  color: "#6BBF59",
                }}
              >
                {textPart}
              </Typography>
            </Box>
          ) : (
            // ✅ NORMAL % / NUMBER
            <Typography
              sx={{
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {/* {hasPercent
                ? `${count.toFixed(0)}%`
                : `${count.toFixed(0)}`} */}
              {hasPercent
                ? `${count.toFixed(0)}${value.includes("+") ? "%+" : "%"}`
                : `${count.toFixed(0)}`}
            </Typography>
          )}
        </Box>

        {/* TITLE */}
        {title && (
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#F47A20",
            }}
          >
            {title}
          </Typography>
        )}

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#6B7280",
            fontSize: "0.95rem",
            lineHeight: 1.5,
            maxWidth: "220px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default StatCard;
