import { createContext } from "react";
import type { PrayerTimesContextType } from "../utilities/interfaces";


export const PrayerTimesContext =
  createContext<PrayerTimesContextType | null>(null);