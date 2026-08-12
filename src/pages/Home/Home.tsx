import { Container, Grid, Stack } from "@mui/material";
import CurrentCountry from "../../components/CurrentCountry";
import PrayerTimesCards from "../../components/PrayerTimesCards";
import OtherPagesCard from "./components/OtherPagesCard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import WesttIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
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
                title={t("quraanMessageCardTitle")}
                description={t("quraanMessageDescription")}
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
                    {i18n.language === "ar" && (
                      <WesttIcon sx={{ fontSize: 18, marginInlineEnd: 1 }} />
                    )}
                    {t("openQuraanMsg")}
                    {i18n.language === "en" && (
                      <EastIcon sx={{ fontSize: 18, marginInlineStart: 1 }} />
                    )}
                  </Button>
                </Link>
              </OtherPagesCard>
              <OtherPagesCard
                title={t("tasbeehCardTitle")}
                description={t("tasbeehDescription")}
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
                    {t("openTasbeeh")}
                  </Button>
                </Link>
              </OtherPagesCard>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
