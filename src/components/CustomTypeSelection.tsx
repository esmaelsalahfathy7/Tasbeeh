import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";

export default function CustomTypeSelection({
  onTypeChange,
  selectedType,
}: {
  onTypeChange: (type: string) => void;
  selectedType: string;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    onTypeChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 200, outlineColor: "primary.main" }}
        size="small"
      >
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedType}
          onChange={handleChange}
          label="Type"
        >
          <MenuItem value="SubhanAllah">SubhanAllah</MenuItem>
          <MenuItem value="Alhamdulillah">Alhamdulillah</MenuItem>
          <MenuItem value="Allahu Akbar">Allahu Akbar</MenuItem>
          <MenuItem value="La ilaha illallah">La ilaha illallah</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
