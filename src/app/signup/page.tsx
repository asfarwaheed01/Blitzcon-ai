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
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Badge,
} from "@mui/icons-material";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "@/utils/constants";

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  full_name: string;
}

interface SignupErrors {
  username?: string;
  email?: string;
  password?: string;
  full_name?: string;
  general?: string;
}

const SignupPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const [formData, setFormData] = useState<SignupFormData>({
    username: "",
    email: "",
    password: "",
    full_name: "",
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: SignupErrors = {};

    // Full Name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    } else if (formData.full_name.length < 2) {
      newErrors.full_name = "Full name must be at least 2 characters long";
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      console.log("Sending signup request with data:", formData);
      const response = await axios.post(`${BASE_URL}/signup`, formData);
      console.log("Signup API Response:", response.data);

      // Store necessary data in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      // Show success message before redirect (optional)
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.error("Signup Error:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          "Failed to create account. Please try again.";
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
    (field: keyof SignupFormData) =>
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
            {/* Logo placeholder */}
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                priority
              />
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
              Create Your Account
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

            {/* New Full Name field */}
            <TextField
              fullWidth
              label="Full Name"
              value={formData.full_name}
              onChange={handleInputChange("full_name")}
              error={!!errors.full_name}
              helperText={errors.full_name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge color="action" />
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
              label="Username"
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
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
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
                "Create Account"
              )}
            </Button>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{" "}
                <Link
                  href="/login"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignupPage;
