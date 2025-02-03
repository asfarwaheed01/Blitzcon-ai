import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "var(--font-inter)",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "var(--font-inter)",
      fontWeight: 400,
    },
    button: {
      fontFamily: "var(--font-space-grotesk)",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
