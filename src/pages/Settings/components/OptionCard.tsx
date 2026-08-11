import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { Children } from "react";

export default function OptionCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const childrenArray = Children.toArray(children);
  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: "transparent",
        // boxShadow: "0px 0px 2px 1px #e2e2e2",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        p: 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 565px)": {
            flexDirection: "column",
            gap: 2,
          },
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
          }}
          spacing={2}
        >
          <Avatar
            sx={{
              bgcolor: "background.paper",
              color: "primary.dark",
            }}
          >
            {childrenArray[0]}
          </Avatar>
          <Stack>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", color: "text.secondary" }}
            >
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>
        </Stack>
        {childrenArray[1]}
      </CardContent>
    </Card>
  );
}
