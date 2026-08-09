
import { useContext } from "react";
import { PrayerTimesContext } from "../contexts/PrayerTimesContext";

const usePrayerTimeData = () => {
  const context = useContext(PrayerTimesContext);

  if (!context) {
    throw new Error(
      "usePrayerTimeData must be used inside PrayerTimesProvider"
    );
  }

  return context;
};

export default usePrayerTimeData;