// components/ProductsSection.tsx
"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
import AutomationIcon from "@mui/icons-material/AutoFixHigh";
import WorkflowIcon from "@mui/icons-material/AccountTree";

const products = [
  {
    title: "LinkedIn Lead Generator",
    description:
      "Automated lead generation and connection requests based on your target audience criteria.",
    icon: LinkedInIcon,
    comingSoon: false,
  },
  {
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot that handles customer inquiries 24/7 with natural language understanding.",
    icon: SupportAgentIcon,
    comingSoon: false,
  },
  {
    title: "Smart Call Assistant",
    description:
      "AI-powered call handling system that manages, transcribes, and analyzes customer calls.",
    icon: CallIcon,
    comingSoon: false,
  },
  {
    title: "Instagram Automation",
    description:
      "Schedule posts, analyze engagement, and automate responses to comments and DMs.",
    icon: InstagramIcon,
    comingSoon: true,
  },
  {
    title: "Facebook Campaign Manager",
    description:
      "AI-powered ad optimization and audience targeting for better ROI.",
    icon: FacebookIcon,
    comingSoon: true,
  },
  {
    title: "Workflow Automator",
    description:
      "Create and manage custom workflows across multiple platforms and applications.",
    icon: WorkflowIcon,
    comingSoon: true,
  },
  {
    title: "Task Automation Suite",
    description:
      "Automate repetitive tasks and processes with intelligent workflow templates.",
    icon: AutomationIcon,
    comingSoon: true,
  },
  {
    title: "Cross-Platform Analytics",
    description:
      "Unified analytics and reporting across all your social media channels and automation workflows.",
    icon: TwitterIcon,
    comingSoon: true,
  },
];

const ProductsSection = () => {
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
            Our Automation Suite
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
            Powerful n8n templates and workflows to automate your social media
            presence and boost engagement across platforms.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={product.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, position: "relative" }}>
                    {product.comingSoon && (
                      <Chip
                        label="Coming Soon"
                        color="primary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          backgroundColor: "#2196f3",
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        mt: product.comingSoon ? 4 : 2,
                      }}
                    >
                      <product.icon
                        sx={{
                          fontSize: 40,
                          color: "#2196f3",
                          mr: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: "#1a237e",
                          fontFamily: "Poppins",
                        }}
                      >
                        {product.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontFamily: "Inter",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSection;
