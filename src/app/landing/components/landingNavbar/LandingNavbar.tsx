// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Button,
//   MenuItem,
//   useScrollTrigger,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AdbIcon from "@mui/icons-material/Adb";
// import { NavItem } from "../../../types";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { BASE_URL } from "@/utils/constants";

// interface LoginResponse {
//   success: boolean;
//   token?: string;
//   message?: string;
//   // Add other response fields based on your API
// }

// const navItems: NavItem[] = [
//   { label: "Features", href: "#features" },
//   { label: "Solutions", href: "#solutions" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "About", href: "#about" },
// ];

// const LandingNavbar: React.FC = () => {
//   const router = useRouter();
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");
//   const [showError, setShowError] = useState<boolean>(false);

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   useEffect(() => {
//     const handleScroll = (): void => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = (): void => {
//     setAnchorElNav(null);
//   };

//   const handleLogin = async (): Promise<void> => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(`${BASE_URL}/login`);
//       if (response.status === 200) {
//         const html = response.data;
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const divElement = doc.querySelector("div[data-payload]");
//         const token = divElement?.getAttribute("data-payload");
//         if (!token) {
//           throw new Error("No authentication token found");
//         }
//         console.log(`Token: ${token}`);
//         localStorage.setItem("authToken", token);
//         router.push("/dashboard");
//       }else {
//         throw new Error(response.data.message || "Login failed");
//       }
//     } catch (err) {
//       // Handle errors
//       const errorMessage =
//         err instanceof Error ? err.message : "Login failed. Please try again.";
//       setError(errorMessage);
//       setShowError(true);
//       console.error("Login Error:", err);
//     } finally {
//       // Reset loading state
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
//         boxShadow: isScrolled ? 1 : 0,
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontWeight: 700,
//               color: isScrolled ? "primary.main" : "white",
//               textDecoration: "none",
//             }}
//           >
//             AI PLATFORM
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color={isScrolled ? "primary" : "inherit"}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {navItems.map((item) => (
//                 <MenuItem key={item.label} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{item.label}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center",
//             }}
//           >
//             {navItems.map((item) => (
//               <Button
//                 key={item.label}
//                 href={item.href}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: isScrolled ? "primary.main" : "white",
//                   display: "block",
//                   mx: 2,
//                   "&:hover": {
//                     color: "secondary.main",
//                   },
//                 }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>

//           <Button
//             variant="contained"
//             color="primary"
//             sx={{
//               display: { xs: "none", md: "block" },
//               borderRadius: "20px",
//               px: 3,
//             }}
//             onClick={handleLogin}
//           >
//             Login
//           </Button>

//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{
//               display: { xs: "none", md: "block" },
//               borderRadius: "20px",
//               px: 3,
//             }}
//             onClick={() => router.push("/dashboard")}
//           >
//             Get Started
//           </Button>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default LandingNavbar;

"use client";
import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import logo from "../../../../../public/images/logos/logo.png";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Service", href: "#service" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

const LandingNavbar: React.FC = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_URL}/login`);
      if (response.status === 200) {
        const html = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const divElement = doc.querySelector("div[data-payload]");
        const token = divElement?.getAttribute("data-payload");
        if (!token) {
          throw new Error("No authentication token found");
        }
        localStorage.setItem("authToken", token);
        router.push("/dashboard");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(errorMessage);
      console.error("Login Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#242834",
        boxShadow: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", md: "80px" },
            justifyContent: "space-between", // This ensures space between logo and nav items
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={logo} alt="logo" />
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <Typography textAlign="center" sx={{ fontSize: "18px" }}>
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogin}>
                <Typography textAlign="center" sx={{ fontSize: "18px" }}>
                  Login
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Navigation and Login */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "20px",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  textTransform: "none",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: 0.8,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#242834",
                borderRadius: "4px",
                padding: "8px 12px",
                fontSize: "16px",
                fontWeight: 600,
                ml: 2,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingNavbar;
