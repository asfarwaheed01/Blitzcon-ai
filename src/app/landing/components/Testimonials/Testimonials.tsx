//components/TestimonialsSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
  Rating,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    avatar: "/api/placeholder/150/150",
    rating: 5,
    text: "The AI automation tools have completely transformed our social media management. We&apos;ve seen a 300% increase in engagement and saved countless hours.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Social Media Manager",
    company: "GrowthLabs",
    avatar: "/api/placeholder/150/150",
    rating: 5,
    text: "The smart chat assistant is incredibly intuitive. It handles customer inquiries 24/7 and has significantly improved our response time and satisfaction rates.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Customer Success Lead",
    company: "InnovateX",
    avatar: "/api/placeholder/150/150",
    rating: 5,
    text: "What impressed me most was how seamlessly it integrated with our existing workflow. The analytics dashboard provides invaluable insights for our strategy.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Operations Manager",
    company: "ScaleUp Solutions",
    avatar: "/api/placeholder/150/150",
    rating: 5,
    text: "The automation workflows are a game-changer. We&apos;ve reduced manual tasks by 75% and our team can now focus on strategic initiatives.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ py: 12, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1a237e",
              mb: 2,
              fontFamily: "Poppins",
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#546e7a",
              mb: 8,
              maxWidth: "800px",
              mx: "auto",
              fontFamily: "Inter",
            }}
          >
            Join thousands of satisfied users who have transformed their
            workflow with our AI solutions
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", height: "400px", overflow: "hidden" }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: { xs: 2, md: 8 },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 60,
                    color: "#2196f3",
                    opacity: 0.2,
                    mb: 4,
                  }}
                />
                <Avatar
                  src={testimonials[currentIndex].avatar}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 3,
                    border: "4px solid #2196f3",
                  }}
                />
                <Rating
                  value={testimonials[currentIndex].rating}
                  readOnly
                  sx={{ mb: 3 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    color: "#1a237e",
                    mb: 4,
                    fontFamily: "Inter",
                    fontStyle: "italic",
                    maxWidth: "800px",
                  }}
                >
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1a237e",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                  }}
                >
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#546e7a",
                    fontFamily: "Inter",
                  }}
                >
                  {testimonials[currentIndex].role} at{" "}
                  {testimonials[currentIndex].company}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <IconButton
            onClick={() => paginate(-1)}
            sx={{
              position: "absolute",
              left: { xs: 0, md: 20 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => paginate(1)}
            sx={{
              position: "absolute",
              right: { xs: 0, md: 20 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Testimonial Indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            gap: 1,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#2196f3" : "#e0e0e0",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
