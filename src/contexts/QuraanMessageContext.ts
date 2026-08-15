import { createContext } from "react";
import type { Surah } from "../utilities/interfaces";

export const QuraanMessageContext = createContext<{
  surah: Surah | null;
} | null>(null);
