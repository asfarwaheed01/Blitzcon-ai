import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  styled,
  Alert,
  Container,
  CircularProgress,
  keyframes,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

interface FormProps {
  onSubmit: (data: { prompt: string; file: File | null }) => void;
  isLoading: boolean;
}

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
`;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadBox = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const UploadForm: React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (
        fileExtension === "csv" ||
        fileExtension === "xls" ||
        fileExtension === "xlsx"
      ) {
        setFile(selectedFile);
        setError("");
      } else {
        setError("Please upload only .csv or .xls files");
        setFile(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }
    onSubmit({ prompt, file });
  };

  return (
    <Container maxWidth="md" sx={{ maxWidth: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          mt: { xs: 3, md: 4 },
          bgcolor: "background.paper",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          AI Live Chat Assistant
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Write your prompt here"
            multiline
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            sx={{ mb: 3 }}
          />

          <UploadBox
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <CloudUpload sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
            <Typography variant="body1" gutterBottom>
              {file ? file.name : "Drag and drop or click to upload"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Supported formats: CSV, XLS, XLSX
            </Typography>
            <VisuallyHiddenInput
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept=".csv,.xls,.xlsx"
            />
          </UploadBox>

          {error && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              background: "linear-gradient(45deg, #2196F3 30%, #512DA8 90%)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(45deg, #1976D2 30%, #4527A0 90%)",
              },
              position: "relative",
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    size={20}
                    sx={{
                      color: "white",
                      animation: `${pulse} 1.5s ease-in-out infinite`,
                    }}
                  />
                </Box>
              </>
            ) : (
              "Start Chat"
            )}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UploadForm;
