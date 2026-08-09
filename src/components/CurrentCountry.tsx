import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import { colors } from "../theme/Colors";
import usePrayerTimeData from "../hooks/usePrayerTimeData";
import dayjs from "dayjs";
import useCountDown from "../hooks/useCountDown";

export default function CurrentCountry({
  summarized = false,
}: {
  summarized?: boolean;
}) {
  const { location, currentStatus } = usePrayerTimeData();
  const remainingToNext = useCountDown();

  const currentTime = dayjs().format("hh:mm A");
  const nextPrayerTitle =
    currentStatus?.next_prayer !== "none"
      ? currentStatus?.next_prayer
      : "Fajer";

  const hours = Math.floor(remainingToNext / 3600) || 0;
  const minutes = Math.floor(remainingToNext / 60) % 60 || 0;
  const seconds = remainingToNext % 60 || 0;

  if (!summarized) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          textAlign: "center",
          my: 20,
        }}
      >
        <Card
          sx={{
            boxShadow: " 0 0 14px 2px #0000001f",
            p: 6,
            borderRadius: 5,
            backgroundColor: "transparent",
          }}
        >
          <CardContent
            sx={{
              "&:last-child": {
                padding: "0",
              },
            }}
          >
            <Stack spacing={4}>
              <Stack
                direction={"row"}
                sx={{
                  color: "text.secondary",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  "& .MuiTypography-root": {
                    fontWeight: "bold",
                  },
                }}
              >
                <LocationOnIcon />
                <Typography variant="body1">
                  {location.city || "Alexandria"}, {location.country || "Egypt"}
                </Typography>
                <Typography variant="body1">•</Typography>
                <Typography variant="body1">{currentTime}</Typography>
              </Stack>

              <Typography
                variant="h3"
                sx={{
                  color: "primary.dark",
                  fontWeight: "bold",
                }}
              >
                Experience Spiritual Tranquility
              </Typography>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                Find your peace in the rhythm of daily devotions.
              </Typography>
              <Stack
                direction={"row"}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{
                  py: 4,
                  border: "1px solid #e4e4e4b4",
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  boxShadow: "0 0 4px 1px #e8e8e879",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                    variant="body2"
                  >
                    Next Prayer
                  </Typography>
                  <Typography
                    sx={{
                      color: "primary.dark",
                      fontWeight: "bold",
                      fontFamily: "Literata, serif",
                    }}
                    variant="h5"
                  >
                    {nextPrayerTitle?.toLocaleUpperCase()}
                  </Typography>
                </Stack>
                <Stack sx={{ alignItems: "end" }}>
                  <Typography
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                    variant="body2"
                  >
                    Time Remaining
                  </Typography>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      fontFamily: "Literata, serif",
                    }}
                    variant="h5"
                  >
                    {` ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} :${String(seconds).padStart(2, "0")} `}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          my: 20,
        }}
      >
        <Card
          sx={{
            boxShadow: " 0 0 14px 2px #0000001f",
            p: 6,
            borderRadius: 5,
            backgroundColor: "transparent",
          }}
        >
          <CardContent
            sx={{
              "&:last-child": {
                padding: "0",
              },
            }}
          >
            <Stack
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Literata, serif ", color: "primary.main" }}
              >
                <LocationOnIcon />
                {location.city || "Alexandria"}, {location.country || "Egypt"}
              </Typography>

              <Typography
                sx={{
                  color: colors.neutral[800],
                  fontWeight: "bold",
                  fontFamily: "Literata, serif",
                }}
                variant="h3"
              >
                {nextPrayerTitle?.toLocaleUpperCase()}
              </Typography>
              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontFamily: "Literata, serif",
                }}
                variant="h5"
              >
                {` ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} :${String(seconds).padStart(2, "0")} `}
              </Typography>
              <Typography
                sx={{ color: "text.primary", fontWeight: "bold" }}
                variant="body2"
              >
                Time until next prayer
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
