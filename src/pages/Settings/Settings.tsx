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

export default function Settings() {
  return (
    <Container maxWidth={"md"} sx={{ mt: 15 }}>
      <Stack spacing={1} sx={{ mb: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Literata, serif", color: "primary.dark" }}
        >
          Settings
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
          Manage your spiritual journey preferences
        </Typography>
      </Stack>
      <Stack spacing={8}>
        {/* Apperance */}
        <div>
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
            Appearance
          </Typography>
          <Apperance />
        </div>

        {/* Preferences */}
        <div>
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
            Preferences
          </Typography>
          <Language />
          <TimeFormat />
        </div>
      </Stack>
    </Container>
  );
}

function Apperance() {
  const { settings, setSettings } = useSettingsData();

  const handleThemeChanged = (theme: "dark" | "light" | "system") => {
    setSettings({ ...settings, theme: theme });
  };
  return (
    <OptionCard
      title={"Theme"}
      description={"Select your preferred viewing mode"}
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
          Dark
        </Button>
        <Button
          onClick={() => {
            handleThemeChanged("light");
          }}
          variant={settings.theme === "light" ? "contained" : "outlined"}
        >
          Light
        </Button>
        <Button
          onClick={() => {
            handleThemeChanged("system");
          }}
          variant={settings.theme === "system" ? "contained" : "outlined"}
        >
          System
        </Button>
      </ButtonGroup>
    </OptionCard>
  );
}

function Language() {
  const { settings, setSettings } = useSettingsData();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSettings({ ...settings, language: event.target.value as string });
  };
  return (
    <OptionCard title={"Language"} description={"App interface language"}>
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

function TimeFormat() {
  const { settings, setSettings } = useSettingsData();
  return (
    <OptionCard
      title={"Time Format"}
      description={"12-hour or 24-hour display"}
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
