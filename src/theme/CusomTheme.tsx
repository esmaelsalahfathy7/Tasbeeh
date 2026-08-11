import { createTheme } from "@mui/material/styles";

const getTheme = (mode: "light" | "dark" | "system") => {
  if (mode === "system") {
    mode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",

      h1: {
        fontFamily: "Literata, serif",
        fontWeight: 700,
      },

      h2: {
        fontFamily: "Literata, serif",
        fontWeight: 700,
      },

      h3: {
        fontFamily: "Literata, serif",
        fontWeight: 600,
      },

      body1: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
      },

      body2: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
      },

      button: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      },
    },
    palette: {
      mode,

      primary:
        mode === "light"
          ? {
              light: "#10B981",
              main: "#064E3B",
              dark: "#003527",
            }
          : {
              light: "#064E3B",
              main: "#064E3B",
              dark: "#6FFBBE",
            },

      secondary: {
        main: "#D4AF37",
        light: "#FFEC99",
        dark: "#8A6E18",
      },

      background:
        mode === "light"
          ? {
              default: "#ffffff",
              paper: "#d1ece5",
            }
          : {
              default: "#002117",
              paper: "#022E22",
            },

      divider: mode === "light" ? "transparent" : "#0D4835",

      text:
        mode === "light"
          ? {
              primary: "#064E3B",
              secondary: "#242424",
            }
          : {
              primary: "#b0f0d6",
              secondary: "#4ba774",
            },
    },
  });
};

export default getTheme;
