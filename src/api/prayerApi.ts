import type { Location } from "../utilities/interfaces";

async function getPrayerTimes(location: Location) {
  const response = await fetch(
    `https://ummahapi.com/api/prayer-times?lat=${location?.latitude || "31.2001"}&lng=${location?.longitude || "29.9187"}`,
    {
      cache: "no-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch prayer times");
  }

  return await response.json();
}

export default getPrayerTimes;
