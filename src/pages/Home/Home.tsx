import { Container, Grid, Stack } from "@mui/material";
import CurrentCountry from "../../components/CurrentCountry";
import PrayerTimesCards from "../../components/PrayerTimesCards";
import OtherPagesCard from "./components/OtherPagesCard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import usePrayerTimeData from "../../hooks/usePrayerTimeData";

export default function Home() {
  const { loading } = usePrayerTimeData();

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
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
                  a: {
                    width: "100%",
                  },
                  button: {
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
                  <Link to={"quraan-message"}>
                    <Button
                      variant="contained"
                      sx={(theme) => ({
                        "&:hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "background.paper"
                              : "",
                        },
                      })}
                    >
                      Open Quraan Message
                      <EastIcon sx={{ fontSize: 18, marginInlineStart: 1 }} />
                    </Button>
                  </Link>
                </OtherPagesCard>
                <OtherPagesCard
                  title="Mindful Remembrance"
                  description="Keep track of your daily Dhikr easily."
                >
                  <AccessTimeIcon />

                  <Link to={"tasbeeh"}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.dark",
                        },
                      }}
                    >
                      Start Tasbeeh
                    </Button>
                  </Link>
                </OtherPagesCard>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
