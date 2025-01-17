// import { baselightTheme } from "@/utils/theme/DefaultColors";
// import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { League_Spartan } from "next/font/google";
import "./global.css";
import { Metadata } from "next";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BlitzconAI - Intelligent Automation Solutions",
    default: "BlitzconAI - AI-Powered Workflow Automation Platform",
  },
  description:
    "Transform your business with AI-powered workflow automation. Streamline processes, enhance productivity, and optimize operations with intelligent chat and call assistants.",
  keywords: [
    "workflow automation",
    "AI automation",
    "business automation",
    "chat assistant",
    "call automation",
    "social media automation",
    "workflow optimization",
    "AI solutions",
    "business efficiency",
    "process automation",
  ],
  openGraph: {
    title: "BlitzconAI - Intelligent Automation Solutions",
    description: "Transform your business with AI-powered workflow automation.",
    url: "https://your-domain.com",
    siteName: "BlitzconAI",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlitzconAI Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlitzconAI - Intelligent Automation Solutions",
    description: "Transform your business with AI-powered workflow automation.",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body>
        {/* <ThemeProvider theme={baselightTheme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
