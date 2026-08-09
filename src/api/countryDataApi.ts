async function getCountryData(country: string, city: string) {
  const response = await fetch(
    "https://nominatim.openstreetmap.org/search?" +
      new URLSearchParams({
        city: city,
        country: country,
        format: "jsonv2",
        limit: "1",
        featureType: "city",
      }),
  );
  const data = await response.json();
  return data;
}

export default getCountryData;
