import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
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

  return (
    <>
      <Container
        sx={{
          display: !summarized ? "flex" : "block",
          justifyContent: "center",
          alignItems: " center",
          textAlign: "center",
          my: 20,
        }}
      >
        <Card
          sx={{
            boxShadow: " 0 0 14px 2px #0000001f",
            p: 5,
            borderRadius: 5,
            backgroundColor: "background.default",
            backgroundImage: "none",
            border: "1px solid ",
            borderColor: "divider",
          }}
        >
          <CardContent
            sx={{
              "&:last-child": {
                padding: "0",
              },
            }}
          >
            {!summarized ? (
              <Stack spacing={4}>
                <Stack
                  direction={"row"}
                  sx={{
                    color: "text.primary",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    gap: 2,
                    "& .MuiTypography-root": {
                      fontWeight: "bold",
                    },
                    "@media (max-width: 564px)": {
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    },
                  }}
                >
                  <LocationOnIcon />
                  <Typography variant="caption" sx={{}}>
                    {location.city || "Alexandria"},{" "}
                    {location.country || "Egypt"}
                  </Typography>
                  <Typography variant="caption">•</Typography>
                  <Typography variant="caption">{currentTime}</Typography>
                </Stack>

                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.dark",
                    fontWeight: "bold",
                    "@media (max-width: 564px)": {
                      fontSize: "35px",
                    },
                  }}
                >
                  Experience Spiritual Tranquility
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  Find your peace in the rhythm of daily devotions.
                </Typography>
                <Stack
                  direction={"row"}
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  sx={{
                    py: 3,
                    bgcolor: "background.paper",
                    backgroundImage: "none",
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    "@media (max-width: 564px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      alignItems: "start",
                      "@media (max-width: 564px)": {
                        alignItems: "center",
                      },
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
                        textTransform: "capitalize",
                      }}
                      variant="h5"
                    >
                      {nextPrayerTitle}
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      alignItems: "end",
                      "@media (max-width: 564px)": {
                        alignItems: "center",
                        marginLeft: "0 !important",
                      },
                    }}
                  >
                    <Typography
                      sx={{ color: "text.primary", fontWeight: "bold" }}
                      variant="body2"
                    >
                      Time Remaining
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.primary",
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
            ) : (
              <Stack
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Literata, serif ",
                    color: "text.primary",
                    textTransform: "uppercase",
                    letterSpacing: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <LocationOnIcon />
                  {location.city || "Alexandria"}, {location.country || "Egypt"}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontWeight: "bold",
                    fontFamily: "Literata, serif",
                    textTransform: "capitalize",
                  }}
                  variant="h3"
                >
                  {nextPrayerTitle}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    fontFamily: "Literata, serif",
                  }}
                  variant="h5"
                >
                  {` ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} :${String(seconds).padStart(2, "0")} `}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                  variant="body2"
                >
                  Time until next prayer
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
