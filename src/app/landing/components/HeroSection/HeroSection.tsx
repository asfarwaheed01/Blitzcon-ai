// components/HeroSection.tsx
"use client";
import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedHeroText from "./AnimatedHeroTest";
import FlowChart from "./FlowChart";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedHeroText />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: "#546e7a",
                  mb: 4,
                  fontFamily: "Inter",
                  lineHeight: 1.6,
                }}
              >
                Transform your social media presence with intelligent
                automation. Save time and boost engagement across LinkedIn,
                Instagram, and Facebook.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#2196f3",
                    fontFamily: "Poppins",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                  onClick={() => {
                    window.location.href = "/dashboard";
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#2196f3",
                    color: "#2196f3",
                    fontFamily: "Poppins",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#1976d2",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                sx={{ mt: 6, display: "flex", alignItems: "center", gap: 4 }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1a237e",
                      fontWeight: 700,
                      fontFamily: "Poppins",
                    }}
                  >
                    10,000+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#546e7a",
                      fontFamily: "Inter",
                    }}
                  >
                    Active Users
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1a237e",
                      fontWeight: 700,
                      fontFamily: "Poppins",
                    }}
                  >
                    98%
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#546e7a",
                      fontFamily: "Inter",
                    }}
                  >
                    Satisfaction Rate
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <FlowChart />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
