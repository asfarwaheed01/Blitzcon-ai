import { useState } from "react";
import { BASE_URL } from "@/utils/constants";

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${BASE_URL}/upload_doc`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      return {
        success: true,
        fileUrl: data.s3_key,
        chunksProcessed: data.chunks_processed,
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
      return { success: false };
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, error, progress };
};
