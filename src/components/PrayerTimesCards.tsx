/* Material UI Components */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Box, Stack } from "@mui/material";
import { Grid } from "@mui/system";

/* colors */
import { colors } from "../theme/Colors";

/* Material Ui Icons */
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SunnyIcon from "@mui/icons-material/Sunny";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness3Icon from "@mui/icons-material/Brightness3";

/* Reat Types */
import type { ReactNode } from "react";

/* DayJs Library */
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

/* Custom Hook To Get Prayer Times Data */
import usePrayerTimeData from "../hooks/usePrayerTimeData";

import { pulse, ping } from "../utilities/animation";
import useSettingsData from "../hooks/useSettingsData";
import { useTranslation } from "react-i18next";

dayjs.extend(customParseFormat);

const cards = [
  {
    id: 0,
    icon: <WbTwilightIcon />,
    pray: "Fajr",
    time: "00:00",
  },
  {
    id: 2,
    icon: <WbSunnyIcon />,
    pray: "Sunrise",
    time: "00:00",
  },
  {
    id: 3,
    icon: <SunnyIcon />,
    pray: "Dhuhr",
    time: "00:00",
  },
  {
    id: 4,
    icon: <SunnyIcon />,
    pray: "Asr",
    time: "00:00",
  },
  {
    id: 5,
    icon: <NightsStayIcon />,
    pray: "Maghrib",
    time: "00:00",
  },
  {
    id: 6,
    icon: <Brightness3Icon />,
    pray: "Isha",
    time: "00:00",
  },
];

export default function PrayerTimesCards({
  isColumns,
}: {
  isColumns?: boolean;
}) {
  const { t, i18n } = useTranslation();

  const { prayerTimesData, currentStatus } = usePrayerTimeData();

  const { settings } = useSettingsData();
  const currentDate = dayjs().format("dddd, D MMMM ");

  const nextPrayer =
    currentStatus?.next_prayer !== "none" ? currentStatus?.next_prayer : "Fajr";
  type PrayerKey = keyof typeof prayerTimesData;
  let data: { id: number; icon: ReactNode; pray: string; time: string }[] =
    cards;
  if (prayerTimesData !== null && prayerTimesData !== undefined) {
    data = cards.map((card) => {
      const pray = card.pray.toLocaleLowerCase() as PrayerKey;
      return { ...card, time: prayerTimesData[pray] };
    });
  }
  const dotColor = "#10B981";

  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",

          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          "@media (max-width: 564px)": {
            flexDirection: "column",
            gap: 2,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "Literata, serif", color: "primary.dark" }}
        >
          {t("timePrayer")}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            bgcolor: colors.primary[900],
            px: 2,
            borderRadius: 5,
            color: colors.primary[200],
            fontWeight: "bold",
          }}
        >
          {currentDate}
        </Typography>
      </Stack>
      {!isColumns ? (
        <Grid
          container
          spacing={2}
          sx={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
          }}
        >
          {data.map((card) => (
            <Grid key={card.id} size={{ xs: 6, md: 4 }}>
              <Card
                className={
                  card.pray.toLocaleLowerCase() === nextPrayer ? "active" : ""
                }
                sx={{
                  bgcolor: "background.default",
                  borderRadius: 4,
                  position: "relative",
                  transition: "0.3s",
                  backgroundImage: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  "&.active": {
                    backgroundColor: "primary.main",
                    animation: `${pulse} 3s ease-in-out infinite`,
                    "& .MuiBox-root": {
                      display: "inline-block",
                    },
                    svg: {
                      color: colors.primary[200],
                    },
                    span: {
                      color: "text.secondary",
                    },
                    h6: {
                      color: "white",
                    },
                  },

                  "&:hover:not(.active)": {
                    bgcolor: "background.paper",
                    "& :first-of-type": {
                      color: "primary.dark",
                    },
                  },
                }}
              >
                {/* The Circle That make a ping effect in the card which mean this is the next pray */}
                <Box
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "15px",
                    display: "none",
                    width: "10px",
                    height: "10px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      bgcolor: dotColor,
                    }}
                  />

                  <Box
                    sx={{
                      inset: -6,
                      borderRadius: "50%",
                      position: "absolute",
                      bgcolor: dotColor,
                      opacity: 0.3,
                      zIndex: 1,
                      animation: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      "& svg": {
                        fontSize: "24px",
                        transition: "0.3s",
                      },
                    }}
                  >
                    {card.icon}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.primary",
                      fontWeight: "bold",
                      transition: "0.3s",
                    }}
                  >
                    {t(`${card.pray.toLowerCase()}`)}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "primary.dark" }}>
                    {dayjs(card.time, "HH:mm").format(
                      settings.timeFormat === "12" ? "hh:mm A" : "HH:mm",
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack
          sx={{ mb: 20, direction: i18n.language === "ar" ? "rtl" : "ltr" }}
        >
          {data.map((card) => (
            <Card
              key={card.id}
              className={
                card.pray.toLocaleLowerCase() === nextPrayer ? "active" : ""
              }
              sx={{
                bgcolor: "background.default",
                borderRadius: 4,
                position: "relative",
                border: "1px solid",
                borderColor: "divider",

                "&.active": {
                  backgroundColor: "primary.main",
                  "& .MuiBox-root": {
                    display: "inline-block",
                  },
                  svg: {
                    color: colors.primary[200],
                  },
                  h5: {
                    color: "white",
                  },
                  h6: {
                    color: "white",
                  },
                },

                "&:hover:not(.active)": {
                  bgcolor: "background.paper",
                  h5: {
                    color: "primary.dark",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Literata, serif",
                    display: "flex",
                    alignItems: "center",
                    color: "text.primary",
                    gap: 1,
                    "& svg": {
                      fontSize: "24px",
                      transition: "0.3s",
                    },
                  }}
                >
                  {card.icon}
                  {t(`${card.pray.toLowerCase()}`)}
                </Typography>
                <Typography variant="h6" sx={{ color: "primary.dark" }}>
                  {dayjs(card.time, "HH:mm").format(
                    settings.timeFormat === "12" ? "hh:mm A" : "HH:mm",
                  )}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
}
