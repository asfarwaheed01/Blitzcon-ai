"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(
        "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+13.gif')"
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        py: 6,
        background: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}
        >
          {/* Left Section - Description and Social Icons */}
          <Box sx={{ maxWidth: "400px" }}>
            <Typography
              sx={{
                mb: 3,
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              BlitzCon-AI Specializes In AI-Driven Solutions To Enhance Business
              Efficiency And Customer Satisfaction.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { icon: <FacebookIcon />, href: "#" },
                { icon: <InstagramIcon />, href: "#" },
                { icon: <TwitterIcon />, href: "#" },
              ].map((social, index) => (
                <Box
                  key={index}
                  component="a"
                  href={social.href}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1a1e2e",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Middle Section - Navigation */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              p: 3,
              minWidth: { xs: "100%", md: "400px" },
              border: "2px solid white",
            }}
          >
            <Box
              sx={{ display: "flex", gap: 8, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Pages
                </Typography>
                <Link href="/" sx={{ color: "white", display: "block", mb: 1 }}>
                  Home
                </Link>
                <Link
                  href="/services"
                  sx={{ color: "white", display: "block", mb: 1 }}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  sx={{ color: "white", display: "block", mb: 1 }}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  sx={{ color: "white", display: "block", mb: 1 }}
                >
                  Blog
                </Link>
                <Link href="/contact" sx={{ color: "white", display: "block" }}>
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Legal
                </Typography>
                <Link
                  href="/privacy"
                  sx={{ color: "white", display: "block", mb: 1 }}
                >
                  Privacy Policy
                </Link>
                <Link href="/terms" sx={{ color: "white", display: "block" }}>
                  Terms of Service
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Contact Info */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              p: 3,
              minWidth: { xs: "100%", md: "400px" },
              border: "2px solid white",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Email: support@blitzcon-ai.com
            </Typography>
            <Typography sx={{ mb: 1 }}>Phone: +1-234-567-8901</Typography>
            <Typography>Address: 123 AI Avenue, Tech City, CA</Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          sx={{
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 2,
            opacity: 0.8,
          }}
        >
          © 2024 blitzcon-ai. all rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
