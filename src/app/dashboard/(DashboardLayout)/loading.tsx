"use client";
import React from "react";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

// Define animations
const pulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
`;

const wave = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const LoadingComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 4,
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, 0.87)"
            : "rgba(255, 255, 255, 0.87)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          opacity: 0.03,
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Main spinner container */}
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer rotating ring */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: `4px solid ${theme.palette.primary.main}`,
            borderRadius: "50%",
            borderTopColor: "transparent",
            animation: `${rotate} 2s linear infinite`,
          }}
        />

        {/* Inner pulsing circle */}
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: theme.palette.secondary.main,
            animation: `${pulse} 2s ease-in-out infinite`,
          }}
        />

        {/* Center dot */}
        <Box
          sx={{
            position: "absolute",
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            animation: `${pulse} 1.5s ease-in-out infinite`,
          }}
        />
      </Box>

      {/* Text content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            textFillColor: "transparent",
            animation: `${pulse} 2s ease-in-out infinite`,
          }}
        >
          Loading Dashboard
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            opacity: 0.8,
            textAlign: "center",
            maxWidth: 300,
          }}
        >
          Preparing your personalized experience
        </Typography>
      </Box>

      {/* Progress indicators */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          mt: 2,
        }}
      >
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
              animation: `${wave} 1.5s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </Box>

      {/* Shimmer effect bar */}
      <Box
        sx={{
          width: 200,
          height: 4,
          borderRadius: 2,
          overflow: "hidden",
          background: `linear-gradient(90deg, 
            transparent 0%,
            ${theme.palette.primary.main} 50%,
            transparent 100%)`,
          backgroundSize: "1000px 100%",
          animation: `${shimmer} 2s infinite linear`,
        }}
      />
    </Box>
  );
};

export default LoadingComponent;
