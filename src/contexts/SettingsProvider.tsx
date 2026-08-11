import React, { useEffect } from "react";
import { SettingsContext } from "./SettingsContext";
import { useState } from "react";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState(() => {
    const settingsData = localStorage.getItem("settings");
    if (settingsData) {
      return JSON.parse(settingsData);
    } else {
      return {
        theme: "system",
        language: "en",
        timeFormat: "12",
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <>
      <SettingsContext.Provider
        value={{
          settings,
          setSettings,
        }}
      >
        {children}
      </SettingsContext.Provider>
    </>
  );
}
