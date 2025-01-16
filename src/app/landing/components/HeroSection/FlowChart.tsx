// components/WorkflowChart.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import AutomationIcon from "@mui/icons-material/AutoFixHigh";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import WorkflowIcon from "@mui/icons-material/AccountTree";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const WorkflowChart = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <motion.svg
        viewBox="0 0 800 600"
        initial="hidden"
        animate="visible"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Central Hub Circle */}
        <motion.circle
          cx="400"
          cy="300"
          r="80"
          fill="#f8f9fa"
          stroke="#2196f3"
          strokeWidth="2"
          variants={draw}
        />

        {/* Main Icons */}
        <motion.g variants={iconVariants}>
          {/* Central Hub Icon */}
          <foreignObject x="360" y="260" width="80" height="80">
            <WorkflowIcon sx={{ fontSize: 40, color: "#2196f3" }} />
          </foreignObject>

          {/* Chat Assistant */}
          <foreignObject x="160" y="140" width="80" height="80">
            <ChatIcon sx={{ fontSize: 40, color: "#2196f3" }} />
          </foreignObject>

          {/* Call Assistant */}
          <foreignObject x="160" y="380" width="80" height="80">
            <CallIcon sx={{ fontSize: 40, color: "#2196f3" }} />
          </foreignObject>

          {/* Automation */}
          <foreignObject x="560" y="140" width="80" height="80">
            <AutomationIcon sx={{ fontSize: 40, color: "#2196f3" }} />
          </foreignObject>

          {/* Analytics */}
          <foreignObject x="560" y="380" width="80" height="80">
            <AnalyticsIcon sx={{ fontSize: 40, color: "#2196f3" }} />
          </foreignObject>

          {/* Social Platform Icons */}
          <foreignObject x="660" y="120" width="40" height="40">
            <LinkedInIcon sx={{ fontSize: 24, color: "#1a237e" }} />
          </foreignObject>
          <foreignObject x="660" y="170" width="40" height="40">
            <InstagramIcon sx={{ fontSize: 24, color: "#1a237e" }} />
          </foreignObject>
          <foreignObject x="660" y="220" width="40" height="40">
            <FacebookIcon sx={{ fontSize: 24, color: "#1a237e" }} />
          </foreignObject>
        </motion.g>

        {/* Connecting Lines */}
        <motion.path
          d="M 400 300 L 200 180"
          stroke="#2196f3"
          strokeWidth="2"
          fill="none"
          variants={draw}
        />
        <motion.path
          d="M 400 300 L 200 420"
          stroke="#2196f3"
          strokeWidth="2"
          fill="none"
          variants={draw}
        />
        <motion.path
          d="M 400 300 L 600 180"
          stroke="#2196f3"
          strokeWidth="2"
          fill="none"
          variants={draw}
        />
        <motion.path
          d="M 400 300 L 600 420"
          stroke="#2196f3"
          strokeWidth="2"
          fill="none"
          variants={draw}
        />

        {/* Social Platform Connection Lines */}
        <motion.path
          d="M 600 180 C 630 180, 640 140, 660 140"
          stroke="#2196f3"
          strokeWidth="1"
          fill="none"
          variants={draw}
        />
        <motion.path
          d="M 600 180 C 630 180, 640 190, 660 190"
          stroke="#2196f3"
          strokeWidth="1"
          fill="none"
          variants={draw}
        />
        <motion.path
          d="M 600 180 C 630 180, 640 240, 660 240"
          stroke="#2196f3"
          strokeWidth="1"
          fill="none"
          variants={draw}
        />

        {/* Feature Labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <text x="130" y="120" fill="#1a237e" fontSize="24" fontFamily="Inter">
            AI Chat Assistant
          </text>
          <text x="130" y="450" fill="#1a237e" fontSize="24" fontFamily="Inter">
            Smart Call Assistant
          </text>
          <text x="520" y="120" fill="#1a237e" fontSize="24" fontFamily="Inter">
            Workflow Automation
          </text>
          <text x="540" y="450" fill="#1a237e" fontSize="24" fontFamily="Inter">
            Analytics Dashboard
          </text>
        </motion.g>

        {/* Floating Particles */}
        <motion.g
          animate={{
            y: [-5, 5, -5],
            transition: {
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
        >
          <circle cx="300" cy="250" r="4" fill="#2196f3" opacity="0.5" />
          <circle cx="500" cy="250" r="4" fill="#2196f3" opacity="0.5" />
          <circle cx="400" cy="200" r="4" fill="#2196f3" opacity="0.5" />
          <circle cx="400" cy="400" r="4" fill="#2196f3" opacity="0.5" />
        </motion.g>
      </motion.svg>
    </Box>
  );
};

export default WorkflowChart;
