"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, Person, Lock } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logos/logo.png";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginErrors {
  username?: string;
  password?: string;
  general?: string;
}

const LoginPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      console.log("Sending login request with data:", formData);
      const response = await axios.post(`${BASE_URL}/signin`, formData);
      console.log("Login API Response:", response.data);

      // Store token and user data in localStorage
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "Invalid username or password";
        setErrors({
          general: errorMessage,
        });
      } else {
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #6b46c1 30%, #805ad5 90%)",
          opacity: 0.1,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #4299e1 30%, #63b3ed 90%)",
          opacity: 0.1,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <Container maxWidth="sm" sx={{ my: "auto" }}>
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, sm: 6 },
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 2 }}>
              <Image src={logo} alt="Logo" width={150} height={50} priority />
            </Box>

            <Typography
              component="h1"
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 700,
                background: "linear-gradient(45deg, #6b46c1 30%, #805ad5 90%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                textAlign: "center",
              }}
            >
              Welcome Back
            </Typography>

            {errors.general && (
              <Typography
                color="error"
                sx={{
                  mb: 2,
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 1,
                  backgroundColor: "error.main",
                  color: "white",
                  width: "100%",
                }}
              >
                {errors.general}
              </Typography>
            )}

            <TextField
              fullWidth
              label="Username"
              type="text"
              value={formData.username}
              onChange={handleInputChange("username")}
              error={!!errors.username}
              helperText={errors.username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange("password")}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(45deg, #6b46c1 30%, #805ad5 90%)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #553c9a 30%, #6b46c1 90%)",
                },
                position: "relative",
                overflow: "hidden",
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </Button>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
