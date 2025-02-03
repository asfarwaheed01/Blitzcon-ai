"use client";
import React, { useState, useRef, useEffect } from "react";
import { Mic, StopCircle } from "lucide-react";
import SendIcon from "@mui/icons-material/Send";
import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents,
  TaskType,
  VoiceEmotion,
} from "@heygen/streaming-avatar";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import { CustomMediaRecorder, Message } from "@/Interfaces/interfaces";
import Image from "next/image";
import FileUploadForm from "../components/live-chat/FileUploadForm";
import { BASE_URL } from "@/utils/constants";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<CustomMediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [responseLoading, setResponseLoading] = useState(false);
  const [formData, setFormData] = useState<{
    prompt: string;
    file: File | null;
  } | null>(null);

  // Avatar states
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const mediaStream = useRef<HTMLVideoElement>(null);
  const avatar = useRef<StreamingAvatar | null>(null);
  const introPlayedRef = useRef(false);

  const introLines = [
    `Hello! I'm here to help you understand regarding your queries. Please feel free to ask me any questions.`,
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (stream && mediaStream.current) {
      mediaStream.current.srcObject = stream;
      mediaStream.current.onloadedmetadata = () => {
        mediaStream.current!.play();
      };
    }
  }, [stream]);

  async function speakIntroLines() {
    for (const line of introLines) {
      try {
        if (avatar.current) {
          await avatar.current.speak({
            text: line,
            task_type: TaskType.REPEAT,
          });
        }
      } catch (error) {
        console.error("Error making the avatar speak intro line:", error);
      }
    }
  }

  async function fetchAccessToken() {
    try {
      const response = await fetch(`/api/get-access-token`, { method: "POST" });
      return await response.text();
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
    return "";
  }

  // const handleFormSubmit = async (data: {
  //   prompt: string;
  //   file: File | null;
  // }) => {
  //   try {
  //     setIsLoadingSession(true);
  //     // First set the form data
  //     setFormData(data);

  //     // Then immediately start the avatar session
  //     const newToken = await fetchAccessToken();

  //     avatar.current = new StreamingAvatar({ token: newToken });

  //     // Set up event listener before creating avatar
  //     avatar.current.on(StreamingEvents.STREAM_READY, (event) => {
  //       setStream(event.detail);
  //     });

  //     await avatar.current.createStartAvatar({
  //       // avatarName: data.selectedAvatarId,
  //       avatarName: "eb0a8cc8046f476da551a5559fbb5c82",
  //       quality: AvatarQuality.High,
  //       voice: {
  //         rate: 1,
  //         emotion: VoiceEmotion.FRIENDLY,
  //       },
  //       language: "en",
  //     });

  //     setSessionStarted(true);
  //     if (!introPlayedRef.current) {
  //       introPlayedRef.current = true;
  //       setTimeout(speakIntroLines, 1000);
  //     }
  //   } catch (error) {
  //     console.error("Error in handleFormSubmit:", error);
  //   } finally {
  //     setIsLoadingSession(false);
  //   }
  // };

  const handleFormSubmit = async (data: {
    prompt: string;
    fileUrl: string | null;
  }) => {
    try {
      setIsLoadingSession(true);
      console.log("data", data);
      setFormData({ prompt: data.prompt, file: null });

      // Check if we have a file URL
      if (!data.fileUrl) {
        throw new Error("No file URL provided");
      }

      // First, process the document
      const response = await fetch(`${BASE_URL}/process-doc`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: data.fileUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to process document: ${response.statusText}`);
      }

      // Get and store API response
      const apiResult = await response.json();
      console.log("API Response:", apiResult);

      // Only proceed with avatar session if we have a valid API response
      if (!apiResult) {
        throw new Error("Invalid API response");
      }

      // Now start the avatar session
      const newToken = await fetchAccessToken();
      if (!newToken) {
        throw new Error("Failed to fetch access token");
      }

      // Initialize avatar with the token
      avatar.current = new StreamingAvatar({ token: newToken });

      // Set up event listener before creating avatar
      avatar.current.on(StreamingEvents.STREAM_READY, (event) => {
        setStream(event.detail);
      });

      // Create and start the avatar
      await avatar.current.createStartAvatar({
        avatarName: "eb0a8cc8046f476da551a5559fbb5c82",
        quality: AvatarQuality.High,
        voice: {
          rate: 1,
          emotion: VoiceEmotion.FRIENDLY,
        },
        language: "en",
      });

      // Set session as started only after successful avatar creation
      setSessionStarted(true);

      // Play intro lines if not played before
      if (!introPlayedRef.current) {
        introPlayedRef.current = true;
        // Update intro message to include API response context if needed
        // You might want to modify the introLines array based on apiResult
        setTimeout(speakIntroLines, 1000);
      }
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
      // Reset any partial state in case of error
      setSessionStarted(false);
      avatar.current = null;
      throw error;
    } finally {
      setIsLoadingSession(false);
    }
  };

  const handleAudioUpload = async (blob: Blob) => {
    try {
      handleSendWavFile(blob);
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  const handleSendMessage = async (transcript?: string) => {
    if (!sessionStarted || (!transcript && !inputText.trim())) return;
    setResponseLoading(true);

    try {
      const userQuery = transcript || inputText.trim();

      // Add user message to chat
      const userMessage: Message = {
        id: Date.now(),
        text: userQuery,
        isUser: true,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Call the new API endpoint
      const response = await fetch(`${BASE_URL}/generate-response`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userQuery,
        }),
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const result = await response.json();
      const botResponse = result.response || "No response received";

      // Add bot message to chat
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Make the avatar speak the response
      if (avatar.current) {
        try {
          await avatar.current.speak({
            text: botResponse,
            task_type: TaskType.REPEAT,
          });
        } catch (error) {
          console.error("Error making the avatar speak:", error);
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Add error message to chat
      const errorMessage: Message = {
        id: Date.now(),
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);

      // Make avatar speak error message
      if (avatar.current) {
        try {
          await avatar.current.speak({
            text: "Sorry, I encountered an error. Please try again.",
            task_type: TaskType.REPEAT,
          });
        } catch (avatarError) {
          console.error(
            "Error making the avatar speak error message:",
            avatarError
          );
        }
      }
    } finally {
      setInputText("");
      setResponseLoading(false);
      setAudioBlob(null);
    }
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(1024, 1, 1);

      const chunks: Float32Array[] = [];

      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        chunks.push(new Float32Array(inputData));
      };

      source.connect(processor);
      processor.connect(audioContext.destination);

      setIsRecording(true);

      mediaRecorderRef.current = {
        stop: () => {
          source.disconnect();
          processor.disconnect();
          stream.getTracks().forEach((track) => track.stop());
          const audioData = concatenateAudioBuffers(
            chunks,
            audioContext.sampleRate
          );
          const wavBlob = createWavFile(audioData, audioContext.sampleRate);
          setAudioBlob(wavBlob);
          handleAudioUpload(wavBlob);
          setIsRecording(false);
        },
      };
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setIsRecording(false);
    }
  };

  const handleSendWavFile = async (blob: Blob) => {
    if (!blob) {
      console.error("No audio blob available to send.");
      return;
    }

    const file = new FormData();
    file.append("file", blob, "recording.wav");

    try {
      const response = await axios.post(
        "https://iegp3k7uyz.us-east-1.awsapprunner.com/api/generate_audio_response",
        file,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const botResponse = response.data || "No response received";
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      if (avatar.current) {
        try {
          await avatar.current.speak({
            text: botResponse,
            task_type: TaskType.REPEAT,
          });
        } catch (error) {
          console.error("Error making the avatar speak:", error);
        }
      }
    } catch (error) {
      console.error("Error sending WAV file:", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const concatenateAudioBuffers = (
    buffers: Float32Array[],
    sampleRate: number
  ): Float32Array => {
    const totalLength = buffers.reduce((acc, buffer) => acc + buffer.length, 0);
    const result = new Float32Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  };

  const createWavFile = (audioData: Float32Array, sampleRate: number): Blob => {
    const buffer = new ArrayBuffer(44 + audioData.length * 2);
    const view = new DataView(buffer);
    writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + audioData.length * 2, true);
    writeString(view, 8, "WAVE");
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, "data");
    view.setUint32(40, audioData.length * 2, true);
    floatTo16BitPCM(view, 44, audioData);

    return new Blob([buffer], { type: "audio/wav" });
  };

  const writeString = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const floatTo16BitPCM = (
    output: DataView,
    offset: number,
    input: Float32Array
  ) => {
    for (let i = 0; i < input.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, input[i]));
      output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        bgcolor: "background.default",
      }}
    >
      {!stream ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 1, md: 3 },
          }}
        >
          <FileUploadForm
            onSubmit={handleFormSubmit}
            isLoading={isLoadingSession}
          />
        </Box>
      ) : (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            // overflow: "hidden",
          }}
        >
          <Box
            sx={{
              //   position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <video
              ref={mediaStream}
              autoPlay
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <track kind="captions" />
            </video>
          </Box>

          {sessionStarted && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 2,
                background: "transparent",
              }}
            >
              <Container maxWidth="lg">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mb: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (avatar.current) {
                        avatar.current.stopAvatar();
                      }
                      setStream(undefined);
                      setSessionStarted(false);
                      setFormData(null);
                      introPlayedRef.current = false;
                    }}
                    sx={{
                      background:
                        "linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)",
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #2196f3 30%, #3f51b5 90%)",
                      },
                    }}
                  >
                    End session
                  </Button>
                </Box>

                <Paper
                  elevation={3}
                  sx={{
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 2,
                    margin: "0 auto",
                  }}
                >
                  <TextField
                    fullWidth
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    variant="standard"
                    sx={{
                      mx: 2,
                      "& .MuiInput-root": {
                        fontSize: "1rem",
                        padding: "8px 0",
                      },
                    }}
                  />

                  <IconButton
                    onClick={() => handleSendMessage()}
                    disabled={responseLoading || !sessionStarted}
                    color="primary"
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(25, 118, 210, 0.04)",
                      },
                    }}
                  >
                    <SendIcon />
                  </IconButton>

                  <IconButton
                    onClick={
                      isRecording ? handleStopRecording : handleStartRecording
                    }
                    disabled={responseLoading || !sessionStarted}
                    color={isRecording ? "error" : "success"}
                    sx={{
                      "&:hover": {
                        backgroundColor: isRecording
                          ? "rgba(211, 47, 47, 0.04)"
                          : "rgba(56, 142, 60, 0.04)",
                      },
                    }}
                  >
                    {isRecording ? <StopCircle /> : <Mic />}
                  </IconButton>
                </Paper>
              </Container>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Chat;
