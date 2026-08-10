import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import useGetPrayerTimeData from "../../../hooks/usePrayerTimeData";
import countries from "../../../utilities/countries";
import getCountryData from "../../../api/countryDataApi";
import { useState } from "react";

export default function LocationChangeCard() {
  const { location, setLocation } = useGetPrayerTimeData();
  const [fetchLoading, setFetchLoading] = useState(false);

  const [country, setCountry] = React.useState(location.country);
  const [city, setCity] = React.useState(location.city);

  const cities = countries.find((countryName) => {
    return country === countryName.name;
  })?.cities;

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
    setCity("");
  };
  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  const handleDetectLocation = () => {
    setFetchLoading(true);
    const selectedCountry = countries.find((currCountry) => {
      return currCountry.name === country;
    });
    const selectedCity = selectedCountry?.cities.find((currCity) => {
      return currCity.name === city;
    });

    if (selectedCountry && selectedCity) {
      getCountryData(selectedCountry?.name, selectedCity?.name)
        .then((data) => {
          setLocation({
            ...location,
            country: selectedCountry?.name,
            city: selectedCity?.name,
            latitude: data[0].lat,
            longitude: data[0].lon,
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setFetchLoading(false);
        });
    }
  };

  return (
    <Card
      sx={{
        boxShadow: " 0 0 14px 2px #0000001f",
        backgroundColor: "transparent",
        borderRadius: 4,
      }}
    >
      <CardContent
        sx={{
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "black",
              fontFamily: "Literata, serif",
            }}
          >
            Location
          </Typography>
          <>
            <FormControl
              variant="outlined"
              sx={{ width: "100%", cursor: "grabbing" }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={handleCountryChange}
                label="Age"
                sx={{ width: "100%", borderRadius: 3, cursor: "grabbing" }}
              >
                {countries.map((country) => {
                  return (
                    <MenuItem key={country.id} value={country.name}>
                      {country.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </>
          <>
            <FormControl
              variant="outlined"
              sx={{ width: "100%", cursor: "grabbing" }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                City
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={city}
                onChange={handleCityChange}
                label="Age"
                sx={{ width: "100%", borderRadius: 3, cursor: "grabbing" }}
              >
                {cities?.map((city) => {
                  return (
                    <MenuItem key={city.id} value={city.name}>
                      {city.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </>

          <Button
            variant="outlined"
            sx={{
              width: "100%",
              fontSize: "16px",
              borderRadius: 2,
              p: 1,
              display: "flex",
              gap: 1,
            }}
            disabled={fetchLoading}
            onClick={handleDetectLocation}
          >
            <CrisisAlertIcon />
            {fetchLoading ? "Loading..." : "Detect Location"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
