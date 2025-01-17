//components/TeamSection.tsx
"use client";
import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Chief Executive Officer",
    image: "/api/placeholder/300/300",
    description:
      "Visionary leader with 15+ years in AI and automation technologies.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Miller",
    role: "Chief Technology Officer",
    image: "/api/placeholder/300/300",
    description:
      "AI expert specializing in natural language processing and machine learning.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Kumar",
    role: "Head of Product",
    image: "/api/placeholder/300/300",
    description:
      "Product strategist focused on creating intuitive AI-powered solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Zhang",
    role: "Lead AI Engineer",
    image: "/api/placeholder/300/300",
    description:
      "Expert in developing advanced AI algorithms and automation systems.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const TeamSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box sx={{ py: 12, backgroundColor: "#f8f9fa" }}>
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
            Meet Our Team
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
            Passionate experts dedicated to revolutionizing workflow automation
            with AI
          </Typography>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <motion.div variants={item}>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                      backgroundColor: "#ffffff",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "100%",
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          p: 2,
                          transform: "translateY(100%)",
                          transition: "transform 0.3s ease-in-out",
                          ".MuiBox-root:hover &": {
                            transform: "translateY(0)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "center",
                          }}
                        >
                          <IconButton
                            size="small"
                            sx={{ color: "#ffffff" }}
                            href={member.social.linkedin}
                            target="_blank"
                          >
                            <LinkedInIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{ color: "#ffffff" }}
                            href={member.social.twitter}
                            target="_blank"
                          >
                            <TwitterIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{ color: "#ffffff" }}
                            href={member.social.github}
                            target="_blank"
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#1a237e",
                          mb: 1,
                          fontFamily: "Poppins",
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#2196f3",
                          mb: 2,
                          fontFamily: "Inter",
                          fontWeight: 500,
                        }}
                      >
                        {member.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#546e7a",
                          fontFamily: "Inter",
                        }}
                      >
                        {member.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection;
