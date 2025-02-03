"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  useTheme,
  Divider,
  CircularProgress,
  Alert,
  Slide,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Assignment, Send } from "@mui/icons-material";

interface FormData {
  task: string;
  phone: string;
}

interface FormErrors {
  task?: string;
  phone?: string;
}

const TaskRequestForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    task: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateTask = (task: string): string | undefined => {
    if (!task) return "Task description is required";
    if (task.length < 3)
      return "Task description must be at least 3 characters";
    if (task.length > 100)
      return "Task description cannot exceed 100 characters";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "Contact number is required";
    if (phone.length < 8) return "Please enter a valid contact number";
    if (phone.length > 15) return "Contact number is too long";
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const taskError = validateTask(formData.task);
    if (taskError) newErrors.task = taskError;
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData((prev) => ({ ...prev, task: value }));
    if (submitted) {
      const taskError = validateTask(value);
      setErrors((prev) => ({ ...prev, task: taskError }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (submitted) {
      const phoneError = validatePhone(value);
      setErrors((prev) => ({ ...prev, phone: phoneError }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formData);
        setSuccess(true);
        // Reset form after successful submission
        setFormData({ task: "", phone: "" });
        setSubmitted(false);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        bgcolor: "background.default",
        px: { xs: 2, sm: 4 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            px: 3,
            py: 2,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Assignment fontSize="large" />
          <Typography variant="h5" fontWeight="500">
            New Request
          </Typography>
        </Box>

        <Divider />

        {/* Form Section */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
                sx={{}}
              >
                Please fill in the details below to submit your task request.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Task Description"
                value={formData.task}
                onChange={handleTaskChange}
                error={!!errors.task}
                helperText={errors.task}
                variant="outlined"
                required
                placeholder="Enter your task description"
                InputProps={{
                  sx: { borderRadius: "0.3rem" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  fontSize: "1rem",
                  borderColor: errors.phone ? "#d32f2f" : undefined,
                  borderRadius: "0.3rem",
                }}
                containerStyle={{
                  width: "100%",
                }}
                inputProps={{
                  required: true,
                  placeholder: "Enter contact number",
                }}
                buttonStyle={{
                  borderRadius: "12px 0 0 12px",
                }}
              />
              {errors.phone && (
                <Typography
                  color="error"
                  variant="caption"
                  sx={{ ml: 2, mt: 0.5, display: "block" }}
                >
                  {errors.phone}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                sx={{
                  mt: 2,
                  height: 56,
                  borderRadius: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Success Message */}
        <Slide direction="up" in={success} mountOnEnter unmountOnExit>
          <Alert
            severity="success"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
            }}
            onClose={() => setSuccess(false)}
          >
            Task request submitted successfully!
          </Alert>
        </Slide>
      </Paper>
    </Box>
  );
};

export default TaskRequestForm;
