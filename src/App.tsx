import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuraanMessage from "./pages/QuraanMessage";
import Tasbeeh from "./pages/Tasbeeh";
import Settings from "./pages/Settings/Settings";
import Layout from "./Layout";
import PrayerTimes from "./pages/PrayerTimes/PrayerTimes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="prayer-times" element={<PrayerTimes />} />
          <Route path="quraan-message" element={<QuraanMessage />} />
          <Route path="tasbeeh" element={<Tasbeeh />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
