import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuraanMessage from "./pages/QuraanMessage";
import Tasbeeh from "./pages/Tasbeeh";
import Settings from "./pages/Settings/Settings";
import Layout from "./Layout";
import PrayerTimes from "./pages/PrayerTimes/PrayerTimes";
import { ThemeProvider } from "@mui/material/styles";
import useSettingsData from "./hooks/useSettingsData";
import getTheme from "./theme/CusomTheme";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";

function App() {
  const { theme } = useSettingsData().settings;
  const currentTheme = useMemo(() => getTheme(theme), [theme]);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="prayer-times" element={<PrayerTimes />} />
            <Route path="quraan-message" element={<QuraanMessage />} />
            <Route path="tasbeeh" element={<Tasbeeh />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
