import React, { useEffect } from "react";
import { SettingsContext } from "./SettingsContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

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
    i18n.changeLanguage(settings.language);
  }, [settings, i18n]);

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
