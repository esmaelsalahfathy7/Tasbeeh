import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function CustomTypeSelection({
  onTypeChange,
  selectedType,
}: {
  onTypeChange: (type: string) => void;
  selectedType: string;
}) {
  const { t } = useTranslation();
  const handleChange = (event: SelectChangeEvent) => {
    onTypeChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 200, outlineColor: "primary.main" }}
        size="small"
      >
        <InputLabel id="demo-simple-select-autowidth-label">
          {t("type")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedType}
          onChange={handleChange}
          label="Type"
        >
          <MenuItem value="subhanAllah">{t(`subhanAllah`)}</MenuItem>
          <MenuItem value="alhamdulillah">{t(`alhamdulillah`)}</MenuItem>
          <MenuItem value="allahuAkbar">{t(`allahuAkbar`)}</MenuItem>
          <MenuItem value="laIlahIllaallah">{t(`laIlahIllaallah`)}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
