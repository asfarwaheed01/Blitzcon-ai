"use client";

import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Define animations
const pulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = "Loading amazing things...",
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        gap: 4,
      }}
    >
      {/* Main loading circle */}
      <Box
        sx={{
          position: "relative",
          animation: `${float} 2s ease-in-out infinite`,
        }}
      >
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: "#7c4dff",
          }}
        />
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: "#651fff",
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -30,
            marginTop: -30,
            animation: `${pulse} 1.5s ease-in-out infinite`,
          }}
        />
      </Box>

      {/* Loading text */}
      <Typography
        variant="h6"
        sx={{
          color: "white",
          textAlign: "center",
          animation: `${pulse} 2s ease-in-out infinite`,
          fontSize: { xs: "1rem", sm: "1.25rem" },
          maxWidth: "80%",
          fontWeight: 500,
        }}
      >
        {message}
      </Typography>

      {/* Background decoration */}
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `${float} ${
              3 + Math.random() * 2
            }s ease-in-out infinite`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
    </Box>
  );
};

export default Loading;
