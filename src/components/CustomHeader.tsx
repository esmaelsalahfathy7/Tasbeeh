import { alpha } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
// Importing MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Icon from "@mui/material/Icon";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsIcon from "@mui/icons-material/Settings";
import useSettingsData from "../hooks/useSettingsData";

// Defining the navigation pages for desktop view and mobile view with icons
const pagesData = [
  { id: 1, title: "Home", target: "/" },
  { id: 2, title: "Prayers", target: "/prayer-times" },
  { id: 3, title: "Quraan", target: "/quraan-message" },
  { id: 4, title: "Tasbeeh", target: "/tasbeeh" },
  { id: 5, title: "Settings", target: "/settings" },
];

const pagesDataMobile = [
  { id: 1, icon: <HomeIcon />, title: "Home", target: "/" },
  { id: 2, icon: <AccessTimeIcon />, title: "Prayers", target: "prayer-times" },
  { id: 3, icon: <MenuBookIcon />, title: "Quraan", target: "quraan-message" },
  { id: 4, icon: <AutoAwesomeIcon />, title: "Tasbeeh", target: "tasbeeh" },
  { id: 5, icon: <SettingsIcon />, title: "Settings", target: "settings" },
];

// ---------- // ------------------ // ----------
// Main CustomHeader component that renders the navigation bar with responsive design
export default function CustomHeader() {
  const { language } = useSettingsData().settings;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageClick = (page: string) => {
    navigate(page);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        direction: language === "ar" ? "rtl" : "ltr",
        bgcolor: "background.default",
        backdropFilter: "blur(5px)",
        m: 0,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundImage: "none",
        borderBottom: "0.2px solid ",
        borderBottomColor: "divider",
        [theme.breakpoints.down(768)]: {
          top: "unset",
          bottom: 0,
          borderTop: "1px solid",
          borderTopColor: "divider",
          boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        },
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Desktop Logo */}
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={(theme) => ({
              mr: 2,
              display: { xs: "none" },
              letterSpacing: "-.02rem",
              textDecoration: "none",
              color: "primary.dark",
              fontWeight: "700",
              fontSize: "3rem",
              [theme.breakpoints.up(768)]: {
                display: "flex",
              },
            })}
          >
            Sakinah
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={(theme) => ({
              display: { xs: "none" },
              gap: 1,
              [theme.breakpoints.up(768)]: {
                display: "flex",
              },
            })}
          >
            {pagesData.map((page) => (
              <Button
                onClick={() => handlePageClick(page.target)}
                key={page.id}
                className={pathname === page.target ? "active" : ""}
                sx={(theme) => ({
                  my: 2,
                  color: "text.primary",
                  display: "block",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textTransform: "none",

                  "&:hover": {
                    color: "primary.dark",
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                  "&.active": {
                    borderBottom: `2px solid`,
                    borderBottomColor: "primary.dark",
                  },
                })}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box
            sx={(theme) => ({
              flexGrow: 1,
              display: { xs: "none" },
              [theme.breakpoints.down(768)]: {
                display: "flex",
                justifyContent: "space-between",
              },
            })}
          >
            {pagesDataMobile.map((page) => (
              <Button
                onClick={() => handlePageClick(page.target)}
                key={page.id}
                className={pathname === page.target ? "active" : ""}
                sx={(theme) => ({
                  my: 1,
                  color: "text.primary",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: ".850rem",
                  fontWeight: "600",
                  borderRadius: "25px",
                  textTransform: "none",

                  "&:hover": {
                    color: "primary.dark",
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                  "&.active": {
                    color: "primary.dark",
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  },
                })}
              >
                {page.icon}
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";

// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//   null,
// );

// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };

{
  /* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "primary.dark" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ color: "primary.dark" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "text.primary" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */
}
