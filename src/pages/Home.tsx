import { Container, Grid, Stack } from "@mui/material";
import CurrentCountry from "../components/CurrentCountry";
import PrayerTimesCards from "../components/PrayerTimesCards";
import OtherPagesCard from "../components/OtherPagesCard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleBtnClick(target: string) {
    navigate(target);
  }

  return (
    <Container sx={{ marginBottom: 15 }}>
      <CurrentCountry />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <PrayerTimesCards />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack
            spacing={5}
            sx={{
              "& button": {
                width: "100%",
                borderRadius: 3,
                p: 1.5,
                fontSize: 12,
              },
            }}
          >
            <OtherPagesCard
              title="Daily Guidance"
              description="Start your day with a meaningful verse from the Quran."
            >
              <AutoStoriesIcon />
              <Button
                variant="contained"
                onClick={() => {
                  handleBtnClick("quraan-message");
                }}
              >
                Open Quraan Message
                <EastIcon sx={{ fontSize: 18, marginInlineStart: 1 }} />
              </Button>
            </OtherPagesCard>
            <OtherPagesCard
              title="Mindful Remembrance"
              description="Keep track of your daily Dhikr easily."
            >
              <AccessTimeIcon />

              <Button
                variant="outlined"
                onClick={() => {
                  handleBtnClick("tasbeeh");
                }}
              >
                Start Tasbeeh
              </Button>
            </OtherPagesCard>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
