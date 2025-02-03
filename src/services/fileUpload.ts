// services/uploadService.ts
import AWS from "aws-sdk";
import axios from "axios";

interface UploadResponse {
  success: boolean;
  fileUrl?: string;
  error?: string;
}

interface ProcessDocResponse {
  success: boolean;
  data?: any;
  error?: string;
}

class UploadService {
  private s3: AWS.S3;
  private BUCKET_NAME: string;
  private API_URL = "https://blitzconai.com/api/process-doc";

  constructor() {
    // Initialize AWS configuration
    AWS.config.update({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region: process.env.NEXT_PUBLIC_AWS_REGION,
    });

    this.s3 = new AWS.S3();
    this.BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || "";
  }

  private generateUniqueFileName(originalName: string): string {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = originalName.split(".").pop();
    return `${timestamp}-${randomString}.${extension}`;
  }

  async uploadToS3(file: File): Promise<UploadResponse> {
    try {
      const fileName = this.generateUniqueFileName(file.name);
      const filePath = `uploads/${fileName}`;

      const params = {
        Bucket: this.BUCKET_NAME,
        Key: filePath,
        Body: file,
        ContentType: file.type,
        // ACL: "public-read",
      };

      const uploadResult = await this.s3.upload(params).promise();

      return {
        success: true,
        fileUrl: uploadResult.Location,
      };
    } catch (error) {
      console.error("Error uploading to S3:", error);
      return {
        success: false,
        error: "Failed to upload file",
      };
    }
  }

  async processDocument(filePath: string): Promise<ProcessDocResponse> {
    try {
      const response = await axios.post(this.API_URL, {
        file_path: filePath,
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("Error processing document:", error);
      return {
        success: false,
        error: "Failed to process document",
      };
    }
  }
}

export const uploadService = new UploadService();
