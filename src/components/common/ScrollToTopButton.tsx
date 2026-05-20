import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 9999,
          }}
        >
          <IconButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            sx={{
              width: 56,
              height: 56,
              background: "var(--color-primary)",
              color: "var(--color-white)",
              boxShadow: "0 10px 25px rgba(235, 123, 51, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              "&:hover": {
                background: "var(--color-primary-hover)",
                transform: "translateY(-3px)",
                boxShadow: "0 15px 30px rgba(235, 123, 51, 0.5)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
