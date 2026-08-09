import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/CusomTheme";
import "@fontsource/literata/600.css";
import "@fontsource/literata/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import PrayerTimesProvider from "./contexts/PrayerTimesProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <PrayerTimesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrayerTimesProvider>
    </ThemeProvider>
  </StrictMode>,
);
