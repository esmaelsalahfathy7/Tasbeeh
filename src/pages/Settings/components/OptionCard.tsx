import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { colors } from "../../../theme/Colors";
import { Avatar } from "@mui/material";
import { Children } from "react";

export default function OptionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const childrenArray = Children.toArray(children);
  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: "transparent",
        boxShadow: "0px 0px 2px 1px #e2e2e2",
        borderRadius: 4,
        p: 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1}>
          <Avatar
            sx={{
              bgcolor: colors.primary[50],
              color: "primary.dark",
            }}
          >
            {childrenArray[0]}
          </Avatar>
          <Stack>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", color: "black" }}
            >
              Theme
            </Typography>
            <Typography variant="body2">
              Select your preferred viewing mode
            </Typography>
          </Stack>
        </Stack>
        {childrenArray[1]}
      </CardContent>
    </Card>
  );
}
