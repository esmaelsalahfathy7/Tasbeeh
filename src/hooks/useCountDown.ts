import { useEffect, useState } from "react";
import type { PryerTimes, PrayerKey } from "../utilities/interfaces";
import dayjs from "dayjs";
import usePrayerTimeData from "./usePrayerTimeData";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

function getSecondsToNextPrayer(
  nextPrayerTitle: PrayerKey,
  prayerTimesData: PryerTimes | null,
  timeZone: string,
): number {
  let nextPrayTime;
  const currentTime = dayjs().tz(timeZone);
  if (nextPrayerTitle === "none") {
    const tomorrow = dayjs().tz(timeZone).add(1, "day").startOf("day");

    if (currentTime.isBefore(tomorrow)) {
      nextPrayTime = dayjs.tz(
        `${currentTime.add(1, "day").format("YYYY-MM-DD")} ${prayerTimesData?.fajr}`,
        "YYYY-MM-DD HH:mm",
        timeZone,
      );
    } else {
      nextPrayTime = dayjs.tz(
        `${currentTime.format("YYYY-MM-DD")} ${prayerTimesData?.fajr}`,
        "YYYY-MM-DD HH:mm",
        timeZone,
      );
    }
  } else {
    nextPrayTime = dayjs(prayerTimesData?.[nextPrayerTitle], "HH:mm");
  }
  return nextPrayTime.diff(currentTime, "seconds");
}

export default function useCountDown(): number {
  const { prayerTimesData, currentStatus, timeZone } = usePrayerTimeData();
  const [remainingToNext, setRemainingToNext] = useState<number>();

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingToNext(() => {
        if (currentStatus?.next_prayer) {
          return getSecondsToNextPrayer(
            currentStatus?.next_prayer,
            prayerTimesData,
            timeZone,
          );
        } else {
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [prayerTimesData, currentStatus?.next_prayer, timeZone]);

  return remainingToNext || 0;
}
