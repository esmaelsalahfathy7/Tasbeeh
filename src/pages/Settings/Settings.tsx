import { Container, Stack, Typography } from "@mui/material";
import OptionCard from "./components/OptionCard";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
  const [mode, setMode] = useState("system");
  return (
    <OptionCard
      title={"Theme"}
      description={"Select your preferred viewing mode"}
    >
      <ColorLensOutlinedIcon />
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button
          onClick={() => {
            setMode("dark");
          }}
          variant={mode === "dark" ? "contained" : "outlined"}
        >
          Dark
        </Button>
        <Button
          onClick={() => {
            setMode("light");
          }}
          variant={mode === "light" ? "contained" : "outlined"}
        >
          Light
        </Button>
        <Button
          onClick={() => {
            setMode("system");
          }}
          variant={mode === "system" ? "contained" : "outlined"}
        >
          System
        </Button>
      </ButtonGroup>
    </OptionCard>
  );
}

function Language() {
  const [lang, setLang] = useState("en");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
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
            value={lang}
            onChange={handleLanguageChange}
            sx={{ color: "black", borderRadius: 3 }}
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
  const [timeFormat, setTimeFormat] = useState("12");

  return (
    <OptionCard
      title={"Time Format"}
      description={"12-hour or 24-hour display"}
    >
      <AccessTimeIcon />
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button
          onClick={() => {
            setTimeFormat("12");
          }}
          variant={timeFormat === "12" ? "contained" : "outlined"}
        >
          12h
        </Button>
        <Button
          onClick={() => {
            setTimeFormat("24");
          }}
          variant={timeFormat === "24" ? "contained" : "outlined"}
        >
          24h
        </Button>
      </ButtonGroup>
    </OptionCard>
  );
}
