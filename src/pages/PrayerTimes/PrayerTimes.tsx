import useGetPrayerTimeData from "../../hooks/usePrayerTimeData";
import PrayerTimesCards from "../../components/PrayerTimesCards";
import CurrentCountry from "../../components/CurrentCountry";
import LoadingComponent from "../../components/LoadingComponent";
import { Container, Grid } from "@mui/material";
import LocationChangeCard from "./components/LocationChangeCard";
export default function PrayerTimes() {
  const { loading } = useGetPrayerTimeData();

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <Container>
          <CurrentCountry summarized={true} />
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <PrayerTimesCards isColumns={true} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <LocationChangeCard />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
