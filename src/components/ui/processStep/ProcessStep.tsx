import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Box sx={{ 
      flex: 1, 
      textAlign: "center", 
      maxWidth: "280px",
      position: "relative",
      p: 2
    }}>
      {/* Step Icon with floating effect */}
      <Box sx={{
        width: "80px",
        height: "80px",
        borderRadius: "24px",
        background: "rgba(107, 191, 89, 0.1)",
        color: "var(--color-green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 24px",
        transition: "all 0.4s ease",
        boxShadow: "0 10px 30px rgba(107, 191, 89, 0.1)",
        "& svg": { fontSize: "2.5rem" },
        "&:hover": {
          background: "var(--color-green)",
          color: "var(--color-white)",
          boxShadow: "0 20px 40px rgba(107, 191, 89, 0.3)"
        }
      }}>
        {icon}
      </Box>

      {/* Step Content */}
      <Typography
        variant="h6"
        fontWeight={850}
        sx={{
          fontSize: "1.2rem",
          color: "var(--color-gray-900)",
          mb: 1.5,
          lineHeight: 1.3,
          letterSpacing: "-0.01em"
        }}
      >
        {title}
      </Typography>
      
      <Typography
        sx={{
          fontSize: "1rem",
          color: "var(--color-gray-500)",
          lineHeight: 1.6,
          fontWeight: 400
        }}
      >
        {description}
      </Typography>
    </Box>
  </motion.div>
);
