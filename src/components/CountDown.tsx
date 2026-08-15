import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

import useCountDown from "../hooks/useCountDown";

export default function CountDown() {
  const { i18n } = useTranslation();
  const remainingToNext = useCountDown();
  const hours = Math.floor(remainingToNext / 3600) || 0;
  const minutes = Math.floor(remainingToNext / 60) % 60 || 0;
  const seconds = remainingToNext % 60 || 0;

  return (
    <Typography
      sx={{
        color: "text.primary",
        fontWeight: "bold",
        fontFamily: "Literata, serif",
        fontSize: 25,
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
      variant="body1"
    >
      {i18n.language === "ar"
        ? ` ${String(seconds).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(hours).padStart(2, "0")} `
        : ` ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} `}
    </Typography>
  );
}
