import { Box, Container, Typography } from "@mui/material";
import type { Advisor } from "../ui/advisoryCard/advisoryCard";
import { motion } from "framer-motion";

const advisoryData: Advisor[] = [
  {
    id: 1,
    name: "David Wurcel",
    role: "Executive Advisor – Provider Market",
    description:
      "David has over 30 years of experience in healthcare leadership and advisory roles. He brings deep expertise in provider operations, strategic growth, and healthcare transformation initiatives.",
  },
  {
    id: 2,
    name: "Michael M Dudley",
    role: "Executive Advisor – Payer Industry",
    description:
      "Michael has extensive experience in the payer and healthcare insurance industry. He has held senior leadership roles and provides strategic guidance on payer operations and healthcare policy environments.",
  },
  {
    id: 3,
    name: "Ali Pabrai",
    role: "Executive Advisor – Compliance and Security",
    description:
      "Ali is a recognized expert in cybersecurity, compliance, and risk management. He advises CognitiveHealth on healthcare security standards, regulatory compliance, and enterprise risk mitigation.",
  },
];

const AdvisorySection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 15 },
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(107, 191, 89, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={12}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                mb: 3,
                fontSize: { xs: "20px", md: "28px" },
                color: "#1F2937",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
              }}
            >
              Advisory Team
            </Typography>
            <Typography
              sx={{
                color: "#6B7280",
                maxWidth: "650px",
                mx: "auto",
                fontSize: "1.2rem",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Our advisors are well-known thought leaders drawn from the
              healthcare industry.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          {advisoryData.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 4, md: 8 },
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                  mb: 10,
                  position: "relative",
                  "&:hover .advisor-avatar": {
                    transform: "scale(1.1) rotate(5deg)",
                    boxShadow: "0 20px 40px rgba(107, 191, 89, 0.2)",
                  },
                  "&:hover .advisor-name": { color: "#F47A20" },
                }}
              >
                <Box
                  className="advisor-avatar"
                  sx={{
                    flexShrink: 0,
                    width: "140px",
                    height: "140px",
                    borderRadius: "40px",
                    background:
                      "linear-gradient(135deg, rgba(107, 191, 89, 0.1) 0%, rgba(107, 191, 89, 0.2) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: "#6BBF59",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(107, 191, 89, 0.2)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  }}
                >
                  {advisor.name.charAt(0)}
                </Box>

                <Box>
                  <Typography
                    className="advisor-name"
                    variant="h4"
                    fontWeight={900}
                    sx={{
                      mb: 1,
                      color: "#1F2937",
                      fontSize: { xs: "20px", md: "25px" },
                      transition: "color 0.3s ease",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {advisor.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#F47A20",
                      fontWeight: 800,
                      fontSize: { xs: "16px", md: "18px" },
                      // textTransform: "uppercase",

                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "flex-start" },
                      gap: 2,
                      "&::after": {
                        content: '""',
                        width: "40px",
                        height: "2px",
                        background: "rgba(244, 122, 32, 0.3)",
                      },
                    }}
                  >
                    {advisor.role}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4B5563",
                      fontSize: "1.15rem",
                      lineHeight: 1.8,
                      maxWidth: "750px",
                      fontWeight: 500,
                    }}
                  >
                    {advisor.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AdvisorySection;
