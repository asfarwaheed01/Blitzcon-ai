"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ScheduleDemo = () => {
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(
        "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+92.gif')"
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      sx={{
        py: 8,
        minHeight: "100vh",
        background: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ width: "100%", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "48px", md: "76px" },
              fontWeight: 900,
              textAlign: "right",
              mb: 1,
            }}
          >
            SCHEDULE A DEMO
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              textAlign: "right",
            }}
          >
            See BlitzConAI in action!
          </Typography>
        </Box>

        {/* Main Content */}
        <Box>
          {/* Two Column Layout */}
          <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
            {/* Left Column - Contact Cards */}
            <Box sx={{ flex: 0.4 }}>
              {/* Chat to Sales Card */}
              <Box
                sx={{
                  bgcolor: "rgba(200, 200, 200, 0.9)",
                  borderRadius: "12px",
                  p: 3,
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography variant="h6" sx={{ fontSize: "36px", mb: 1 }}>
                    Chat to sales
                  </Typography>
                  <Typography
                    sx={{
                      mb: 1,
                      color: "#333",
                      fontSize: "24px",
                      lineHeight: "1",
                    }}
                  >
                    Interested in switching? Speak to our friendly team.
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:sales@blitzconai.com"
                    sx={{
                      color: "#9fff1a",
                      textDecoration: "none",
                      fontSize: "30px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    sales@blitzconai.com
                  </Typography>
                </Box>
                <Button
                  sx={{
                    minWidth: "auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "white",
                    "&:hover": { bgcolor: "white", opacity: 0.9 },
                  }}
                >
                  <ArrowOutwardIcon />
                </Button>
              </Box>

              {/* Email Support Card */}
              <Box
                sx={{
                  bgcolor: "rgba(200, 200, 200, 0.9)",
                  borderRadius: "12px",
                  p: 3,
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography variant="h6" sx={{ fontSize: "36px", mb: 1 }}>
                    Email Support
                  </Typography>
                  <Typography
                    sx={{
                      mb: 1,
                      color: "#333",
                      fontSize: "24px",
                      lineHeight: "1",
                    }}
                  >
                    Email us and we&apos;ll get back to you within 24 hours.
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:support@blitzconai.com"
                    sx={{
                      color: "#9fff1a",
                      textDecoration: "none",
                      fontSize: "30px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    support@blitzconai.com
                  </Typography>
                </Box>
                <Button
                  sx={{
                    minWidth: "auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "white",
                    "&:hover": { bgcolor: "white", opacity: 0.9 },
                  }}
                >
                  <ArrowOutwardIcon />
                </Button>
              </Box>

              {/* Chat Support Card */}
              <Box
                sx={{
                  bgcolor: "rgba(200, 200, 200, 0.9)",
                  borderRadius: "12px",
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "36px", mb: 1 }}>
                    Chat Support
                  </Typography>
                  <Typography
                    sx={{ color: "#333", fontSize: "24px", lineHeight: "1" }}
                  >
                    Chat to our team 24/7 for instant access to support.
                  </Typography>
                </Box>
                <Button
                  sx={{
                    minWidth: "auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "white",
                    "&:hover": { bgcolor: "white", opacity: 0.9 },
                  }}
                >
                  <ArrowOutwardIcon />
                </Button>
              </Box>
            </Box>

            {/* Right Column - Form */}
            <Box sx={{ flex: 0.6 }}>
              {/* Description Text */}
              <Typography
                sx={{
                  textAlign: "right",
                  lineHeight: "1.1",
                  fontSize: "24px",
                  maxWidth: "900px",
                  margin: "0 auto 48px",
                }}
              >
                Schedule a demo to explore how our AI agents can{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  boost efficiency, enhance customer experience, and deliver
                  insights tailored
                </Box>{" "}
                for your business.
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#B6FF00",
                  mb: 3,
                  textAlign: "right",
                }}
              >
                Fill Form for Schedule Demo
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  backgroundColor: "rgba(180, 180, 180, 0.95)",
                  borderRadius: "12px",
                  padding: "40px",
                  width: "100%",
                  //   maxWidth: "600px",
                }}
              >
                {/* Name Field */}
                <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#1a1a1a",
                      width: "200px",
                      flex: "none",
                    }}
                  >
                    Enter full name
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 2,
                        left: 2,
                        right: 2,
                        bottom: 2,
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.5)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "45px",
                        backgroundColor: "#4a4a4a",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0 16px",
                        color: "white",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    />
                  </Box>
                </Box>

                {/* Number Field */}
                <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#1a1a1a",
                      width: "200px",
                      flex: "none",
                    }}
                  >
                    Enter number
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 2,
                        left: 2,
                        right: 2,
                        bottom: 2,
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.5)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <input
                      type="tel"
                      style={{
                        width: "100%",
                        height: "45px",
                        backgroundColor: "#4a4a4a",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0 16px",
                        color: "white",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    />
                  </Box>
                </Box>

                {/* Email Field */}
                <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#1a1a1a",
                      width: "200px",
                      flex: "none",
                    }}
                  >
                    Enter email Id.
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 2,
                        left: 2,
                        right: 2,
                        bottom: 2,
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.5)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <input
                      type="email"
                      style={{
                        width: "100%",
                        height: "45px",
                        backgroundColor: "#4a4a4a",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0 16px",
                        color: "white",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    />
                  </Box>
                </Box>

                {/* Submit Button */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#f5f5f5",
                      color: "#1a1a1a",
                      borderRadius: "25px",
                      padding: "12px 70px",
                      fontSize: "18px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      border: "none",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ScheduleDemo;
