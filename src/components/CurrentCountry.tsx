import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import usePrayerTimeData from "../hooks/usePrayerTimeData";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import CountDown from "./CountDown";

export default function CurrentCountry({
  summarized = false,
}: {
  summarized?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const { location, currentStatus, timeZone } = usePrayerTimeData();

  const currentTime = dayjs().tz(timeZone).format("hh:mm A");
  const nextPrayerTitle =
    currentStatus?.next_prayer !== "none" ? currentStatus?.next_prayer : "Fajr";

  return (
    <>
      <Container
        sx={{
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
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
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
                    {i18n.language === "ar" ? location.cityAr : location.city},{" "}
                    {i18n.language === "ar"
                      ? location.countryAr
                      : location.country}
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
                  {t("introMsg")}
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  {t("introDescription")}
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
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
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
                      sx={{
                        color: "text.secondary",
                        fontWeight: "bold",
                        marginInlineEnd: 2,
                      }}
                      variant="body2"
                    >
                      {t("nextPray")}
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
                      {t(`${nextPrayerTitle?.toLowerCase()}`)}
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
                      {t("nextPrayRemain")}
                    </Typography>
                    <CountDown />
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
                <Typography variant="caption">{currentTime}</Typography>

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
                  {i18n.language === "ar"
                    ? location.cityAr
                    : location.city},{" "}
                  {i18n.language === "ar"
                    ? location.countryAr
                    : location.country}
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
                  {t(`${nextPrayerTitle?.toLowerCase()}`)}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    fontFamily: "Literata, serif",
                  }}
                  variant="h5"
                >
                  <CountDown />
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                  variant="body2"
                >
                  {t("nextPrayRemain")}
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
