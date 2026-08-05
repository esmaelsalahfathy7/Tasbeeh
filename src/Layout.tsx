import { Outlet } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Typography from "@mui/material/Typography";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <CustomHeader />
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#F3F4F5",
          borderTop: "1px solid #E0E0E0",
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
            sx={{ color: "primary.main", m: 0, fontWeight: "700" }}
          >
            {" "}
            Sakinah.
          </Typography>{" "}
          All rights reserved
        </Typography>
      </footer>
    </div>
  );
}
