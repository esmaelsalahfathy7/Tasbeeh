import PrayerTimesProvider from "../contexts/PrayerTimesProvider";
import { Outlet } from "react-router-dom";

export default function PrayerTimeLayout() {
  return (
    <PrayerTimesProvider>
      <Outlet />
    </PrayerTimesProvider>
  );
}
