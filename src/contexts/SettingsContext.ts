import { createContext } from "react";
import type { Settings } from "../utilities/interfaces";

export const SettingsContext = createContext({} as Settings);
