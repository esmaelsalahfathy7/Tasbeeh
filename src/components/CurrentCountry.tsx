import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
export default function CurrentCountry() {
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
              <Typography variant="body1">London, UK</Typography>
              <Typography variant="body1">•</Typography>
              <Typography variant="body1">14:23 PM</Typography>
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
                p: 4,
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
                  Maghrib
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
                  00:00
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
