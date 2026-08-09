import { useEffect, useState } from "react";
import getPrayerTimes from "../api/prayerApi";
import { PrayerTimesContext } from "./PrayerTimesContext";
import type {
  CurrentStatus,
  Location,
  PryerTimes,
} from "../utilities/interfaces";
import locations from "../utilities/locations";

export default function PrayerTimesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = useState<Location>({} as Location);
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [prayerTimesData, setPrayerTimesData] = useState<PryerTimes | null>(
    null,
  );
  const [timeZone, setTimeZone] = useState<string>("Africa/Egypt");
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus | null>(
    null,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const currentLocation: Location | undefined = locations.find((loc) => {
          return (
            loc.latitude.toFixed(0) === latitude.toFixed(0) &&
            loc.longitude.toFixed(0) === longitude.toFixed(0)
          );
        });
        if (currentLocation) {
          setLocation(currentLocation);
        } else {
          setLocation({
            latitude: 31.2001,
            longitude: 29.9187,
            country: "Egypt",
            city: "Alexandria",
          });
        }
      },
      (error) => {
        console.error(error);
        setLocation({
          latitude: 31.2001,
          longitude: 29.9187,
          country: "Egypt",
          city: "Alexandria",
        });
      },
    );
  }, []);

  useEffect(() => {
    if (!location.city) return;

    async function fetchData() {
      setFetchLoading(true);
      try {
        const prayerTimes = await getPrayerTimes(location);
        setPrayerTimesData(prayerTimes.data.prayer_times);
        setCurrentStatus(prayerTimes.data.current_status);
        setTimeZone(prayerTimes.data.timezone);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setFetchLoading(false);
      }
    }

    fetchData();
  }, [location]);

  return (
    <PrayerTimesContext.Provider
      value={{
        location,
        timeZone,
        fetchLoading,
        setLocation,
        loading,
        prayerTimesData,
        currentStatus,
      }}
    >
      {children}
    </PrayerTimesContext.Provider>
  );
}
