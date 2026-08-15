import { useRef, useState, useEffect } from "react";
import CustomTabs from "./Components/CustomTargetCounts";
import CustomTypeSelection from "./Components/CustomTypeSelection";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

export default function Tasbeeh() {
  const { t } = useTranslation();
  const timerRef = useRef<number | null>(null);
  const canTap = useRef(true);
  const [count, setCount] = useState(0);
  const [selectedType, setSelectedType] = useState(t(`subhanAllah`));
  const [targetCount, setTargetCount] = useState<number | null>(null);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCount(0);
  };

  const handleTargetCountChange = (target: number | null) => {
    setTargetCount(target);
    setCount(0);
  };

  const handleTap = (): void => {
    if (!canTap.current) return;

    if (targetCount !== null && targetCount - 1 === count) {
      alert("Congrates");
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount + 1);
    canTap.current = false;
    timerRef.current = window.setTimeout(() => {
      canTap.current = true;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "2rem",
        }}
      >
        <CustomTabs
          targetCount={targetCount}
          onTargetCountChange={handleTargetCountChange}
        />
        <CustomTypeSelection
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
        <div
          style={{
            width: "200px",
            height: "200px",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            border: "20px solid #064e3b",
            fontFamily: "'Literata', sans-serif",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              m: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {count}
            <Typography variant="body1" gutterBottom sx={{ m: 0 }}>
              {t(selectedType)}
            </Typography>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            sx={{ borderRadius: "50px", width: "50px", height: "80px" }}
            onClick={() => setCount(0)}
          >
            <RestartAltIcon />
          </Button>
          <Button
            variant="contained"
            sx={(theme) => ({
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              fontSize: "1.5rem",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "primary.main",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "primary.light"
                    : "primary.dark",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
              },
              "&:active": {
                transform: "scale(.95)",
              },
            })}
            onClick={handleTap}
          >
            Tap
          </Button>
        </div>
      </Container>
    </>
  );
}
