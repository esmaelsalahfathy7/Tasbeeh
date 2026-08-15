import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export default function CustomTargetCounts({
  onTargetCountChange,
  targetCount,
}: {
  onTargetCountChange: (target: number | null) => void;
  targetCount: number | null;
}) {
  const handleTabClick = (target: number | null) => {
    onTargetCountChange(target);
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant={targetCount === 33 ? "contained" : "outlined"}
        onClick={() => handleTabClick(33)}
      >
        33
      </Button>
      <Button
        variant={targetCount === 99 ? "contained" : "outlined"}
        onClick={() => handleTabClick(99)}
      >
        99
      </Button>
      <Button
        variant={targetCount === 1000 ? "contained" : "outlined"}
        onClick={() => handleTabClick(1000)}
      >
        1000
      </Button>
      <Button
        variant={targetCount === null ? "contained" : "outlined"}
        onClick={() => handleTabClick(null)}
      >
        <AllInclusiveIcon />
      </Button>
    </Stack>
  );
}
