"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: `url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+92.gif') no-repeat center center/cover`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "40px", sm: "56px", md: "89px" },
            fontWeight: 700,
            mb: 2,
            color: "#1A1A1A",
            lineHeight: 1.2,
            "& span": {
              color: "inherit",
            },
          }}
        >
          Human creates, AI elevates.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "32px" },
            fontWeight: 400,
            mb: 6,
            color: "#1A1A1A",
            opacity: 0.9,
          }}
        >
          Empowering Your Business with AI Innovations
        </Typography>

        <Button
          variant="contained"
          href="/dashboard"
          sx={{
            backgroundColor: "#EBE9E9",
            color: "#000",
            fontSize: { xs: "16px", md: "18px" },
            py: { xs: 1.5, md: 2 },
            px: { xs: 4, md: 6 },
            borderRadius: "30px",
            textTransform: "uppercase",
            fontWeight: 600,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              backgroundColor: "#ccc",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          GET STARTED
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
