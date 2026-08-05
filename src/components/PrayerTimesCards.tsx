import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SunnyIcon from "@mui/icons-material/Sunny";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { colors } from "../theme/Colors";
import { Grid, keyframes } from "@mui/system";
import { Box, Stack } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const cards = [
  {
    id: 0,
    icon: <WbTwilightIcon />,
    pray: "Fajr",
    time: "05:23",
  },
  {
    id: 2,
    icon: <WbSunnyIcon />,
    pray: "Sunrise",
    time: "06:45",
  },
  {
    id: 3,
    icon: <SunnyIcon />,
    pray: "Dhuhr",
    time: "12:58",
  },
  {
    id: 4,
    icon: <SunnyIcon />,
    pray: "Asr",
    time: "15:34",
  },
  {
    id: 5,
    icon: <NightsStayIcon />,
    pray: "Maghrib",
    time: "18:15",
  },
  {
    id: 6,
    icon: <Brightness3Icon />,
    pray: "Isha",
    time: "19:30",
  },
];

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(0.90);
  }

  100% {
    transform: scale(1);
  }
`;

const ping = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 1;
  }

  75%,
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;
export default function PrayerTimesCards() {
  const done = true;
  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "Literata, serif", color: "primary.dark" }}
        >
          Prayer Times
        </Typography>
        <Typography
          variant="caption"
          sx={{
            bgcolor: colors.primary[100],
            px: 2,
            borderRadius: 5,
            color: colors.primary[800],
            fontWeight: "bold",
          }}
        >
          Thursday, 12 Oct
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid key={card.id} size={{ xs: 6, md: 4 }}>
            <Card
              className={card.id === 2 ? "active" : ""}
              sx={{
                bgcolor: "background.default",
                boxShadow: "0px 0px 8px 2px #e2e2e2",
                transition: "0.2s",
                opacity: done ? "1" : "0.5",
                borderRadius: 4,
                position: "relative",

                "&.active": {
                  backgroundColor: "primary.main",
                  animation: `${pulse} 3s ease-in-out infinite`,
                  "& .MuiBox-root": {
                    display: "inline-block",
                  },
                  "& svg": {
                    color: colors.primary[200],
                  },
                  span: {
                    color: "primary.light",
                  },
                  "& h6": {
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
              <Box
                sx={{
                  position: "absolute",
                  right: "15px",
                  top: "15px",
                  display: "none",
                }}
              >
                <Card
                  sx={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: colors.primary[500],
                  }}
                ></Card>

                <Box
                  sx={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    bgcolor: colors.primary[500],
                    opacity: 0.3,
                    zIndex: 1,
                    animation: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#707974",
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
                  sx={{ color: "text.primary", fontWeight: "bold" }}
                >
                  {card.pray.toUpperCase()}
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  {card.time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
