"use client";
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SimpleLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        animation: `${fadeIn} 0.3s ease-in`,
      }}
    >
      <CircularProgress
        size={40}
        thickness={4}
        sx={{
          color: "#6b46c1",
          mb: 2,
        }}
      />
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontWeight: 500,
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default SimpleLoading;
