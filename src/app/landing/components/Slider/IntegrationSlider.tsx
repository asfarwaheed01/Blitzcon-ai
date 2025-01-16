// components/IntegrationSlider.tsx
"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SlackIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShopIcon from "@mui/icons-material/Shop";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EmailIcon from "@mui/icons-material/Email";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import CloudIcon from "@mui/icons-material/Cloud";
import ApiIcon from "@mui/icons-material/Api";
import WorkflowIcon from "@mui/icons-material/AccountTree";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import AutomateIcon from "@mui/icons-material/AutoFixHigh";

const integrations = [
  { icon: LinkedInIcon, name: "LinkedIn" },
  { icon: FacebookIcon, name: "Facebook" },
  { icon: InstagramIcon, name: "Instagram" },
  { icon: TwitterIcon, name: "Twitter" },
  { icon: SlackIcon, name: "Slack" },
  { icon: GitHubIcon, name: "GitHub" },
  { icon: ShopIcon, name: "Shopify" },
  { icon: AnalyticsIcon, name: "Analytics" },
  { icon: EmailIcon, name: "Gmail" },
  { icon: CalendarIcon, name: "Calendar" },
  { icon: CloudIcon, name: "Cloud" },
  { icon: ApiIcon, name: "APIs" },
  { icon: WorkflowIcon, name: "n8n" },
  { icon: StorageIcon, name: "Database" },
  { icon: CodeIcon, name: "Webhooks" },
  { icon: AutomateIcon, name: "Zapier" },
];

// Double the integrations array for seamless infinite scroll
const doubledIntegrations = [...integrations, ...integrations];

const IntegrationSlider = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "#f8f9fa", overflow: "hidden" }}>
      <Container
        maxWidth="lg"
        sx={{ overflow: "hidden", padding: 0 }}
        style={{ padding: "0 !important" }}
      >
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
            Powerful Integrations
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
            Connect and automate your favorite tools and platforms
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", width: "100%" }}>
          {/* Gradient Overlays */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background:
                "linear-gradient(to right, #f8f9fa 0%, transparent 100%)",
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background:
                "linear-gradient(to left, #f8f9fa 0%, transparent 100%)",
              zIndex: 2,
            }}
          />

          {/* Scrolling Content */}
          <motion.div
            animate={{
              x: [0, -50 * integrations.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              padding: 0,
              gap: "64px",
              alignItems: "center",
            }}
          >
            {doubledIntegrations.map((item, index) => (
              <Box
                key={`${item.name}-${index}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                }}
              >
                <item.icon
                  sx={{
                    fontSize: 40,
                    color: "#2196f3",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#546e7a",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default IntegrationSlider;
