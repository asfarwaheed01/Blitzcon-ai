// const handleLogin = async (): Promise<void> => {
//   setIsLoading(true);
//   setError("");
//   try {
//     const response = await axios.get(`${BASE_URL}/login`);
//     if (response.status === 200) {
//       const html = response.data;
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       const divElement = doc.querySelector("div[data-payload]");
//       const token = divElement?.getAttribute("data-payload");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       localStorage.setItem("authToken", token);
//       router.push("/dashboard");
//     }
//   } catch (err) {
//     const errorMessage =
//       err instanceof Error ? err.message : "Login failed. Please try again.";
//     setError(errorMessage);
//     console.error("Login Error:", err);
//   } finally {
//     setIsLoading(false);
//   }
// };

"use client";
// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const pages = ["Home", "Products", "Solutions", "Pricing", "Contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AutoGraphIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "#2196f3",
                }}
              />
            </motion.div>

            <Typography
              variant="h6"
              noWrap
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#1a237e",
                textDecoration: "none",
              }}
            >
              Blitzcon-AI
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#1a237e" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page, index) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "#1a237e",
                      display: "block",
                      fontFamily: "Poppins",
                      "&:hover": {
                        color: "#2196f3",
                        background: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2196f3",
                  fontFamily: "Poppins",
                  borderRadius: "24px",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Login
              </Button>
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
