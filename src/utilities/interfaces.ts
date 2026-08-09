export interface PryerTimes {
  asr: string;
  dhuhr: string;
  fajr: string;
  imsak: string;
  isha: string;
  maghrib: string;
  sunrise: string;
}

export type PrayerKey =
  | "fajr"
  | "sunrise"
  | "dhuhr"
  | "asr"
  | "maghrib"
  | "isha"
  | "none";

export interface CurrentStatus {
  current_prayer: string;
  minutes_until_next: number;
  next_prayer: PrayerKey;
  time_until_next: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  country: string;
  city: string;
};

export interface PrayerTimesContextType {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  loading: boolean;
  fetchLoading: boolean;
  prayerTimesData: PryerTimes | null;
  currentStatus: CurrentStatus | null;
  timeZone: string;
}
