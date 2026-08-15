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
  countryAr: string;
  city: string;
  cityAr: string;
};

export interface PrayerTimesContextType {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  loading: boolean;
  prayerTimesData: PryerTimes | null;
  currentStatus: CurrentStatus | null;
  timeZone: string;
}

export interface Surah {
  text: string;
  surah: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    numberOfAyahs: number;
  };
  numberInSurah: 107;
}

export interface SettingsValues {
  theme: "dark" | "light" | "system";
  language: string;
  timeFormat: string;
}

export interface Settings {
  settings: SettingsValues;
  setSettings: React.Dispatch<React.SetStateAction<SettingsValues>>;
}
