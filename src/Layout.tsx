import { Outlet } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
          bgcolor: "background.default",
        }}
        component={"div"}
      >
        <CustomHeader />
        <main>
          <Outlet />
        </main>
        <Box
          sx={{
            padding: "1rem",
            textAlign: "center",
            borderTop: "1px solid",
            borderTopColor: "divider",
            color: "text.secondary",
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              fontWeight: "400",
            }}
          >
            © 2026
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "primary.dark", m: 0, fontWeight: "700" }}
            >
              {" "}
              Sakinah.
            </Typography>{" "}
            All rights reserved
          </Typography>
        </Box>
      </Typography>
    </>
  );
}
