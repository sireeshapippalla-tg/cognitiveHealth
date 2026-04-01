import {
  Dialog,
  IconButton,
  Typography,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  member: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

const TeamMemberModal = ({ open, onClose, member }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  if (!member) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(10, 15, 30, 0.4)",
            backdropFilter: "blur(12px)",
          },
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
          outline: "none",
          mx: isMobile ? 0 : 2,
        },
      }}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ width: "100%", outline: "none" }}
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: isMobile ? 0 : "40px",
            padding: isMobile ? "60px 24px 32px" : 8,
            border: isMobile ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: isMobile ? "none" : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "visible",
            maxHeight: isMobile ? "100vh" : "85vh",
            display: "flex",
            flexDirection: "column",
            "&::before": {
              content: isMobile ? "none" : '""',
              position: "absolute",
              inset: -2,
              zIndex: -1,
              background: "linear-gradient(45deg, #3b82f6, #10b981, #f47a20, #3b82f6)",
              borderRadius: "42px",
              opacity: 0.4,
              filter: "blur(8px)",
            },
          }}
        >
          {/* Close Button - Detached */}
          <Box
            sx={{
              position: "fixed",
              top: isMobile ? 12 : -18,
              right: isMobile ? 12 : -18,
              zIndex: 100,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={onClose}
                sx={{
                  width: isMobile ? 36 : 44,
                  height: isMobile ? 36 : 44,
                  background: "#fff",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid #fff",
                  "&:hover": {
                    background: "#fff",
                    color: "#ef4444",
                  },
                }}
              >
                <CloseIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile || isTablet ? "column" : "row",
              alignItems: isMobile || isTablet ? "center" : "flex-start",
              gap: isMobile ? 4 : 6,
              overflowY: "auto",
              pr: isMobile ? 0 : 1,
              /* Custom Scrollbar */
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,0,0,0.05)",
                borderRadius: "10px",
              },
            }}
          >
            {/* IMAGE SECTION */}
            <Box
              sx={{
                width: isMobile ? 180 : 240,
                height: isMobile ? 180 : 240,
                borderRadius: "32px",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
                padding: "2px",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Avatar
                src={member.image}
                alt={member.title}
                variant="rounded"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                }}
              />
            </Box>

            {/* TEXT SECTION */}
            <Box flex={1} textAlign={isMobile || isTablet ? "center" : "left"}>
              <Box mb={isMobile ? 1.5 : 2}>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  fontWeight={900}
                  sx={{
                    color: "#1f2937",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    fontSize: isMobile ? "1.5rem" : "2.2rem",
                  }}
                >
                  {member.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#3b82f6",
                    fontWeight: 800,
                    fontSize: isMobile ? "0.8rem" : "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mt: 1,
                  }}
                >
                  {member.subtitle}
                </Typography>
              </Box>

              <Typography
                sx={{
                  lineHeight: 1.45,
                  color: "#4b5563",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  fontWeight: 500,
                  whiteSpace: "normal",
                }}
              >
                {member.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};

export default TeamMemberModal;
