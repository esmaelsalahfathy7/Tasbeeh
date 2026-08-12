import { Container, Stack, Typography } from "@mui/material";
import OptionCard from "./components/OptionCard";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useSettingsData from "../../hooks/useSettingsData";
import { useTranslation } from "react-i18next";
import { type TFunction } from "i18next";
import React, { useState } from "react";
import type { Settings, SettingsValues } from "../../utilities/interfaces";

export default function Settings() {
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const { settings, setSettings } = useSettingsData();
  const [currentSettings, setCurrentSettings] =
    useState<SettingsValues>(settings);

  const handleSaveSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoadingSave(true);
    const timer = setTimeout(() => {
      setSettings(currentSettings);
      setLoadingSave(false);
      clearTimeout(timer);
    }, 2000);
  };
  return (
    <>
      <Container maxWidth={"md"} sx={{ mt: 15 }}>
        <Stack
          spacing={1}
          sx={{ mb: 5, direction: i18n.language === "ar" ? "rtl" : "ltr" }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Literata, serif", color: "primary.dark" }}
          >
            {t("settings")}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
            {t("settingsDescription")}
          </Typography>
        </Stack>
        <Stack spacing={8}>
          {/* Apperance */}
          <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                paddingInlineStart: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 1,
                display: "block",
              }}
            >
              {t("appearance")}
            </Typography>
            <Apperance
              t={t}
              settings={currentSettings}
              setSettings={setCurrentSettings}
            />
          </div>

          {/* Preferences */}
          <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                paddingInlineStart: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 1,
                display: "block",
              }}
            >
              {t("preference")}
            </Typography>
            <Language
              t={t}
              settings={currentSettings}
              setSettings={setCurrentSettings}
            />
            <TimeFormat
              t={t}
              settings={currentSettings}
              setSettings={setCurrentSettings}
            />
          </div>
        </Stack>
        <div style={{ textAlign: i18n.language === "en" ? "end" : "start" }}>
          <Button
            variant="outlined"
            sx={{
              mt: 5,
              color: "primary.dark",
              borderColor: "primary.dark",
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
            disabled={loadingSave}
            onClick={handleSaveSettings}
          >
            {loadingSave ? t("saveLoad") : t("save")}
          </Button>
        </div>
      </Container>
    </>
  );
}

function Apperance({
  t,
  settings,
  setSettings,
}: {
  t: TFunction<"translation", undefined>;

  settings: SettingsValues;
  setSettings: React.Dispatch<React.SetStateAction<SettingsValues>>;
}) {
  const handleThemeChanged = (theme: "dark" | "light" | "system") => {
    setSettings({ ...settings, theme: theme });
  };
  return (
    <OptionCard
      title={t("appearanceTitle")}
      description={t("appearanceDescription")}
    >
      <ColorLensOutlinedIcon />
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={(theme) => ({
          button: {
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "background.default" : "",
              color: theme.palette.mode === "dark" ? "text.primary" : "",
            },
          },
        })}
      >
        <Button
          onClick={() => {
            handleThemeChanged("dark");
          }}
          variant={settings.theme === "dark" ? "contained" : "outlined"}
        >
          {t("dark")}
        </Button>
        <Button
          onClick={() => {
            handleThemeChanged("light");
          }}
          variant={settings.theme === "light" ? "contained" : "outlined"}
        >
          {t("light")}
        </Button>
        <Button
          onClick={() => {
            handleThemeChanged("system");
          }}
          variant={settings.theme === "system" ? "contained" : "outlined"}
        >
          {t("system")}
        </Button>
      </ButtonGroup>
    </OptionCard>
  );
}

function Language({
  t,
  settings,
  setSettings,
}: {
  t: TFunction<"translation", undefined>;

  settings: SettingsValues;
  setSettings: React.Dispatch<React.SetStateAction<SettingsValues>>;
}) {
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSettings({ ...settings, language: event.target.value as string });
  };
  return (
    <OptionCard
      title={t("languageTitle")}
      description={t("languageDescription")}
    >
      <LanguageIcon />
      <Box
        sx={{
          minWidth: 150,
          cursor: "copy",
          "& .MuiSelect-select": {
            cursor: "auto",
          },
        }}
      >
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={settings.language}
            onChange={handleLanguageChange}
            sx={(theme) => ({
              color: theme.palette.mode === "light" ? "black" : "",
              borderRadius: 3,
            })}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"ar"}>Arabic (العربية)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </OptionCard>
  );
}

function TimeFormat({
  t,
  settings,
  setSettings,
}: {
  t: TFunction<"translation", undefined>;

  settings: SettingsValues;
  setSettings: React.Dispatch<React.SetStateAction<SettingsValues>>;
}) {
  return (
    <OptionCard
      title={t("timeFormat")}
      description={t("timeFormatDescription")}
    >
      <AccessTimeIcon />
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={(theme) => ({
          button: {
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "background.default" : "",
              color: theme.palette.mode === "dark" ? "text.primary" : "",
            },
          },
        })}
      >
        <Button
          onClick={() => {
            setSettings({ ...settings, timeFormat: "12" });
          }}
          variant={settings.timeFormat === "12" ? "contained" : "outlined"}
        >
          12h
        </Button>
        <Button
          onClick={() => {
            setSettings({ ...settings, timeFormat: "24" });
          }}
          variant={settings.timeFormat === "24" ? "contained" : "outlined"}
        >
          24h
        </Button>
      </ButtonGroup>
    </OptionCard>
  );
}
