"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 10,
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", gap: 10 }}>
          {/* Left Column - Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "48px", md: "76px" },
                fontWeight: 900,
                mb: 4,
                color: "#1a1a1a",
              }}
            >
              ABOUT US
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                mb: 4,
                maxWidth: "500px",
                lineHeight: 1.3,
              }}
            >
              Augmenting Human Potential, Driving Business Success
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                mb: 4,
                color: "#333",
                lineHeight: "44px",
                maxWidth: "600px",
              }}
            >
              BlitzCon-AI is dedicated to revolutionizing business operations
              through the seamless integration of human creativity and AI
              precision. We specialize in creating intelligent AI agents that
              enhance customer experiences, boost efficiency, and drive growth.
              Our mission is to empower businesses to achieve unparalleled
              success by leveraging cutting-edge technology.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#f5f5f5",
                color: "#1a1a1a",
                px: 4,
                py: 1.5,
                borderRadius: "25px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontSize: "16px",
                "&:hover": {
                  bgcolor: "#e5e5e5",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>

          {/* Right Column - Team and Newsletter */}
          <Box
            sx={{
              flex: 1,
              background:
                "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+23.gif') no-repeat center center/cover",
              borderRadius: "12px",
              p: 4,
            }}
          >
            {/* Team Members Section */}
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  mb: 2,
                }}
              >
                {/* Founder Card 1 */}
                <Box
                  sx={{
                    bgcolor: "#1a1e2e",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "417px",
                    flex: 1,
                  }}
                >
                  <Box sx={{ height: `342px`, bgcolor: "#333" }} />
                  <Box sx={{ p: 2, bgcolor: "white" }}>
                    <Typography>Lorem Ipsum</Typography>
                    <Typography sx={{ color: "#9fff1a" }}>Founder</Typography>
                  </Box>
                </Box>

                {/* Founder Card 2 */}
                <Box
                  sx={{
                    bgcolor: "#1a1e2e",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "417px",
                    flex: 1,
                  }}
                >
                  <Box sx={{ height: "342px", bgcolor: "#333" }} />
                  <Box sx={{ p: 2, bgcolor: "white" }}>
                    <Typography>Lorem Ipsum</Typography>
                    <Typography sx={{ color: "#9fff1a" }}>Founder</Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "32px",
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <span> MEET</span>
                <Box component="span" sx={{ color: "#9fff1a" }}>
                  our team
                </Box>
              </Typography>
            </Box>

            {/* Newsletter Section */}
            <Box
              sx={{
                mt: 4,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "210px",
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+26.gif') no-repeat center center/cover",
                  position: "relative",
                }}
              ></Box>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "white",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    color: "#9fff1a",
                    fontWeight: 600,
                  }}
                >
                  NEWS LETTER
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Bottom Text */}
        <Typography
          sx={{
            fontSize: "40px",
            color: "#9fff1a",
            textAlign: "left",
            lineHeight: "1",
            mt: 8,
            fontWeight: 600,
          }}
        >
          THE AI EDGE YOUR BUSINESS DESERVES
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
