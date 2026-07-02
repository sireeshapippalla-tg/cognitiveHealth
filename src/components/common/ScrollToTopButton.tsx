import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledIconButton, StyledArrowIcon } from "./ScrollToTopButton.style";

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
          <StyledIconButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <StyledArrowIcon />
          </StyledIconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
