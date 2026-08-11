import type { ReactNode } from "react";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function OtherPagesCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const childrenArray = React.Children.toArray(children);

  return (
    <Card
      sx={{
        boxShadow: " 0 0 14px 2px #0000001f",
        p: 4,
        borderRadius: 5,
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "divider",
        backgroundImage: "none",
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
          spacing={3}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.dark",
              bgcolor: "background.paper",
              width: 70,
              height: 70,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& svg": {
                fontSize: 30,
              },
            }}
          >
            {childrenArray[0]}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "primary.dark",
              fontWeight: "bold",
              fontFamily: "Literata, serif",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          {childrenArray[1]}
        </Stack>
      </CardContent>
    </Card>
  );
}
