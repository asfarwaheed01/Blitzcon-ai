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
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useFileUpload } from "@/hooks/useFileUpload";
import AvatarSelect from "./AvatarSelect";

interface FormProps {
  onSubmit: (data: {
    prompt: string;
    fileUrl: string;
    avatarId: string;
  }) => Promise<void>;
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

const UploadForm: React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const { uploadFile, isUploading, error: uploadError } = useFileUpload();
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [s3Key, setS3Key] = useState<string | null>(null);
  const [avatarId, setAvatarId] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
    if (!fileExtension || !["doc", "docx", "pdf"].includes(fileExtension)) {
      setError("Please upload only .doc, .docx, or .pdf files");
      return;
    }

    setFile(selectedFile);
    setError("");

    try {
      const result = await uploadFile(selectedFile);
      if (result.success && result.fileUrl) {
        setS3Key(result.fileUrl);
        setError("");
        console.log("File uploaded successfully", result.fileUrl);
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error uploading file");
      setS3Key(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    if (!s3Key) {
      setError("Please upload a file");
      return;
    }

    try {
      await onSubmit({ prompt, fileUrl: s3Key, avatarId });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error submitting form");
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          AI Document Assistant
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <AvatarSelect value={avatarId} onChange={setAvatarId} />
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

          {(error || uploadError) && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error || uploadError}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            disabled={isLoading || isUploading || !s3Key}
          >
            {isLoading || isUploading ? (
              <CircularProgress size={24} color="inherit" />
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
