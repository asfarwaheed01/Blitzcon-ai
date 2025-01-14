import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  styled,
  Alert,
  Container,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { AVATARS } from "@/utils/constants";

interface FormProps {
  onSubmit: (data: {
    prompt: string;
    file: File | null;
    selectedAvatarId: string;
  }) => void;
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

const UploadForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [selectedAvatarId, setSelectedAvatarId] = useState(AVATARS[0].id);
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
    console.log("handleSubmit called");
    onSubmit({ prompt, file, selectedAvatarId });
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          bgcolor: "background.paper",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          AI Live Chat Assistant
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="avatar-select-label">Select Avatar</InputLabel>
            <Select
              labelId="avatar-select-label"
              value={selectedAvatarId}
              label="Select Avatar"
              onChange={(e) => setSelectedAvatarId(e.target.value)}
            >
              {AVATARS.map((avatar) => (
                <MenuItem key={avatar.id} value={avatar.id}>
                  {avatar.name} ({avatar.ethnicity}, {avatar.age})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="What would you like to chat about?"
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
              background: "linear-gradient(45deg, #2196F3 30%, #512DA8 90%)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(45deg, #1976D2 30%, #4527A0 90%)",
              },
            }}
          >
            Start Chat
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UploadForm;
