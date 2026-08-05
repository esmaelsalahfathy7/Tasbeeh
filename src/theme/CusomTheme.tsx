import { createTheme } from "@mui/material/styles";
import { colors } from "./Colors";

const theme = createTheme({
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
    primary: {
      light: colors.primary[500],
      main: colors.primary[900],
      dark: "#003527",
    },

    secondary: {
      main: colors.tertiary[500],
    },

    background: {
      default: colors.neutral[10],
      paper: "#F3F4F5",
    },

    divider: colors.neutral[200],

    text: {
      primary: "#404944",
      secondary: colors.primary[900],
    },
  },
});

export default theme;
