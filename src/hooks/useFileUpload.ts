// hooks/useFileUpload.ts
import { useState } from "react";
import { uploadService } from "../services/fileUpload";

interface UploadResult {
  fileUrl: string | null;
  success: boolean;
}

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File): Promise<UploadResult> => {
    try {
      setIsUploading(true);
      setError(null);
      setProgress(0);

      // Upload to S3
      setProgress(30);
      const uploadResult = await uploadService.uploadToS3(file);

      if (!uploadResult.success || !uploadResult.fileUrl) {
        throw new Error(uploadResult.error || "Upload failed");
      }

      setProgress(100);
      return {
        fileUrl: uploadResult.fileUrl,
        success: true,
      };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return {
        fileUrl: null,
        success: false,
      };
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadFile,
    isUploading,
    error,
    progress,
  };
};
