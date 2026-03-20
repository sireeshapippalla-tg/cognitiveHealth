import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";

export interface ExpandableItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

interface Props {
  item: ExpandableItem;
  variant?: "team" | "capability";
}

const ExpandableCard: React.FC<Props> = ({ item, variant = "team" }) => {
  const [open, setOpen] = useState(item.defaultOpen || false);
  const isCapability = variant === "capability";

  return (
    <Box
      sx={{
        mb: 1.5,
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        background: open ? "rgba(244, 122, 32, 0.05)" : "transparent",
        borderRadius: "32px",
        border: "1px solid",
        borderColor: open ? "rgba(244, 122, 32, 0.3)" : "rgba(0, 0, 0, 0.06)",
        p: { xs: 2.5, md: 3.5 },
        position: "relative",
        "&:hover": {
          borderColor: open ? "rgba(244, 122, 32, 0.4)" : "rgba(107, 191, 89, 0.4)",
          background: open ? "rgba(244, 122, 32, 0.07)" : "rgba(0, 0, 0, 0.02)",
        }
      }}
    >
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2.5, md: 3.5 },
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        {/* ICON - ORGANIC CIRCLE */}
        <Box
          sx={{
            width: "64px",
            height: "64px",
            borderRadius: "30%",
            background: open ? "#F47A20" : "rgba(107, 191, 89, 0.15)",
            color: open ? "#fff" : "#6BBF59",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.4s ease",
            transform: open ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
            flexShrink: 0,
            boxShadow: open ? "0 15px 30px rgba(0, 244, 122, 32, 0.2)" : "none",
            "& svg": {
               fontSize: isCapability ? "2rem" : "2.4rem",
               filter: open ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))" : "none"
            }
          }}
        >
          {isCapability ? item.icon : (
            <Box component="img" src={item.image} sx={{ width: "100%", height: "100%", borderRadius: "30%", objectFit: "cover" }} />
          )}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight={900}
            sx={{
              color: open ? "#F47A20" : "#111827",
              transition: "color 0.4s ease",
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.2
            }}
          >
            {item.title}
          </Typography>
          {item.subtitle && !isCapability && (
            <Typography sx={{ color: "#6B7280", fontWeight: 750, fontSize: "0.9rem", mt: 0.5, textTransform: "uppercase", letterSpacing: "1px" }}>
              {item.subtitle}
            </Typography>
          )}
        </Box>

        <IconButton
          sx={{
            width: "48px",
            height: "48px",
            background: open ? "#111827" : "rgba(0,0,0,0.04)",
            color: open ? "#fff" : "#111827",
            borderRadius: "16px",
            transition: "all 0.4s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            "&:hover": {
               background: open ? "#000" : "rgba(0,0,0,0.1)",
            }
          }}
        >
          {open ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      <Collapse in={open}>
        <Box sx={{ pt: 4, pl: { xs: 0, md: 11.5 }, pr: { xs: 0, md: 4 }, pb: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {typeof item.description === "string" ? (
              <Typography sx={{ color: "#4B5563", fontSize: "1.125rem", lineHeight: 1.7, fontWeight: 500 }}>
                {item.description}
              </Typography>
            ) : (
               <Box sx={{ 
                 "& p, & li, & span": { color: "#4B5563", fontSize: "1.125rem !important", fontWeight: "500 !important", lineHeight: "1.7 !important" },
                 "& ul": { pl: 3, mt: 1.5 }
               }}>
                 {item.description}
               </Box>
            )}
          </motion.div>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableCard;
