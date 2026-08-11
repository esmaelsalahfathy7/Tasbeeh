import { SettingsContext } from "../contexts/SettingsContext";
import { useContext } from "react";

const useSettingsData = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "usePrayerTimeData must be used inside PrayerTimesProvider",
    );
  }

  return context;
};

export default useSettingsData;
