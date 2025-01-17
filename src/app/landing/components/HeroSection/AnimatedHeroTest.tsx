// components/AnimatedHeroText.tsx
import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

const heroTextPairs = [
  {
    main: "Automate Your",
    highlight: "Workflow with AI",
  },
  {
    main: "Transform Customer Support",
    highlight: "with Smart Assistants",
  },
  {
    main: "Streamline Your Business",
    highlight: "Using AI Automation",
  },
  {
    main: "Boost Your Productivity",
    highlight: "with Blitzcon AI",
  },
];

const AnimatedHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === heroTextPairs.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "2.5rem" },
                fontWeight: 700,
                color: "#1a237e",
                mb: 2,
                fontFamily: "Poppins",
                lineHeight: 1.3,
              }}
            >
              {heroTextPairs[currentIndex].main}
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  color: "#2196f3",
                  display: "block",
                  fontFamily: "Poppins",
                  lineHeight: 1,
                }}
              >
                {heroTextPairs[currentIndex].highlight}
              </Typography>
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedHeroText;
