// components/UploadForm.tsx
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
  LinearProgress,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useFileUpload } from "@/hooks/useFileUpload";

interface FormProps {
  onSubmit: (data: { prompt: string; fileUrl: string | null }) => Promise<void>;
  isLoading: boolean;
}

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

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
`;

const UploadForm: React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const {
    uploadFile,
    isUploading,
    error: uploadError,
    progress,
  } = useFileUpload();
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();

    if (!fileExtension || !["doc", "docx", "pdf"].includes(fileExtension)) {
      setError("Please upload only .doc, .docx, or .pdf files");
      setFile(null);
      setFileUrl(null);
      return;
    }

    setFile(selectedFile);
    setError("");

    try {
      const result = await uploadFile(selectedFile);
      if (result.success && result.fileUrl) {
        setFileUrl(result.fileUrl);
        setError("");
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error uploading file");
      setFileUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    if (!fileUrl && file) {
      setError("Please wait for file upload to complete");
      return;
    }

    try {
      await onSubmit({ prompt, fileUrl });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error submitting form");
    }
  };

  const isSubmitDisabled = isLoading || isUploading || (!fileUrl && !!file);

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
              Supported formats: DOC, DOCX, PDF
            </Typography>
            <VisuallyHiddenInput
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept=".doc,.docx,.pdf"
            />
          </UploadBox>

          {isUploading && (
            <Box sx={{ mt: 2, mb: 2 }}>
              <LinearProgress variant="determinate" value={progress} />
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{ mt: 1 }}
              >
                Uploading: {progress}%
              </Typography>
            </Box>
          )}

          {(error || uploadError) && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {error || uploadError}
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
            disabled={isSubmitDisabled}
          >
            {isLoading || isUploading ? (
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
