// components/Footer.tsx
"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  Divider,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Templates", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Brand and Social Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AutoGraphIcon sx={{ fontSize: 32, color: "#2196f3", mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#1a237e",
                    fontFamily: "Poppins",
                  }}
                >
                  Blitzcon AI
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#546e7a",
                  mb: 3,
                  fontFamily: "Inter",
                }}
              >
                Transform your social media presence with intelligent
                automation. Save time and boost engagement across platforms.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={{
                    color: "#2196f3",
                    "&:hover": { backgroundColor: "rgba(33, 150, 243, 0.08)" },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#2196f3",
                    "&:hover": { backgroundColor: "rgba(33, 150, 243, 0.08)" },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#2196f3",
                    "&:hover": { backgroundColor: "rgba(33, 150, 243, 0.08)" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#2196f3",
                    "&:hover": { backgroundColor: "rgba(33, 150, 243, 0.08)" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#1a237e",
                    fontWeight: 600,
                    mb: 2,
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                  }}
                >
                  {category}
                </Typography>
                <List dense disablePadding>
                  {links.map((link) => (
                    <ListItem key={link.name} disablePadding sx={{ mb: 1 }}>
                      <Link
                        href={link.href}
                        underline="none"
                        sx={{
                          color: "#546e7a",
                          fontFamily: "Inter",
                          "&:hover": {
                            color: "#2196f3",
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "#546e7a",
              fontFamily: "Inter",
            }}
          >
            © {new Date().getFullYear()} WorkflowAI. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
