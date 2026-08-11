import { Box, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useState, useEffect } from "react";
import { goUp } from "../utilities/animation";
import quraanMessage from "../api/quraanMessage";
import type { Surah } from "../utilities/interfaces";

export default function QuraanMessage() {
  const [surah, setSurah] = useState<Surah | null>(null);

  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const handleOpenCard = () => {
    setMessageIsOpen(!messageIsOpen);
  };

  useEffect(() => {
    quraanMessage(setSurah);
  }, []);
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 70px)" }}>
        <Container
          maxWidth={"sm"}
          sx={{
            pt: 15,
            overflow: "visible",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Literata, serif",
              color: "primary.dark",
              textAlign: "center",
            }}
          >
            Your Daily Message
          </Typography>
          <Card
            sx={{
              display: "block",
              width: "100%",
              maxWidth: "28rem",
              mt: 13,
              bgcolor: "#FAEBD7",
              // boxShadow: "0px 0px 17px 2px #e6e6e6;",
              borderRadius: 2,
              position: "relative",
              cursor: "pointer",
              overflow: "visible",
              aspectRatio: "4/3",
            }}
            onClick={handleOpenCard}
          >
            <Box
              sx={{
                width: "100%",
                height: "50%",
                borderRadius: 2,
                bgcolor: "#F5EFE6",
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                position: "absolute",
                left: 0,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "50%",
                bgcolor: "#FDFAF5",
                position: "absolute",
                borderRadius: 2,
                top: 0,
                left: 0,
                transition:
                  "transform 0.6s cubic-bezier(0.6, 1.41, 0.81, 0.96)",
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                transformOrigin: "top",
                // transformStyle: "preserve-3d",
                transform: messageIsOpen ? "rotateX(180deg)" : "",
              }}
            >
              <Avatar
                sx={{
                  position: "absolute",
                  bgcolor: "secondary.main",
                  width: 24,
                  height: 24,

                  left: "50%",
                  bottom: 10,

                  transform: "translateX(-50%)",
                  transition: "all 500ms ease",

                  svg: {
                    fontSize: 16,
                  },
                }}
              >
                <EmailOutlinedIcon />
              </Avatar>
            </Box>
            <CardContent
              sx={{
                transform: messageIsOpen
                  ? "scale(.9) translateY(-50%)"
                  : "scale(.9) translateY(50%)",
                opacity: messageIsOpen ? "1" : "0",
                transition: "0.6s 0.6s",
                minHeight: "100%",
                boxShadow: " 0 0 14px 2px #0000001f",
                backgroundColor: "white",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                textAlign: "center",
                direction: "rtl",
              }}
            >
              <AutoStoriesIcon
                sx={{ fontSize: "36px", color: "secondary.main" }}
              />
              <Typography
                variant="h4"
                sx={(theme) => ({
                  color:
                    theme.palette.mode === "dark"
                      ? "primary.light"
                      : "primary.dark",
                  fontWeight: "bold",
                  fontFamily: "Literata, serif",
                  "@media (max-width: 565px)": {
                    fontSize: "25px",
                  },
                })}
              >
                {surah?.text || "فإن مع العسر يسرا"}
              </Typography>

              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                {` ${surah?.surah.name} - ${surah?.surah.number} : ${surah?.numberInSurah}`}
              </Typography>
            </CardContent>
          </Card>
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              opacity: messageIsOpen ? "0" : "1",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.4s ",
              mt: 4,
              color: "secondary.main",
            }}
          >
            <TouchAppOutlinedIcon
              sx={{ fontSize: "18px", animation: `${goUp} 0.8s infinite` }}
            />
            Tap to reveal your daily inspiration
          </Typography>
        </Container>
      </div>
    </>
  );
}
