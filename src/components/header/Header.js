import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "../link";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import elias from "../../images/eliashorizontalb.jpg";
import { Image } from "mui-image";
import GroupRemoveSharpIcon from "@mui/icons-material/GroupRemoveSharp";
import { Grid } from "@mui/material";

const pages = [
  { label: "Nosotros", value: "nosotros" },
  { label: "Contacto", value: "contacto" },
  { label: "Noticias", value: "news" },
  { label: "Factura", value: "factura" },
  { label: "Registrar", value: "signin" },
  { label: "Iniciar sesion", value: "login" },
];

const pagesWithLogin = [
  { label: "Nosotros", value: "nosotros" },
  { label: "Contacto", value: "contacto" },

  { label: "Noticias", value: "news" },
  { label: "Factura", value: "factura" },
];

const ResponsiveAppBar = () => {
  const { userLogin } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const { setUserLogin } = useAuthContext();
  const closeSession = () => {
    window.localStorage.removeItem("usuario");
    setUserLogin(null);
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A237E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            variant="h1"
            noWrap
            component="a"
            href="/"
            width={"9%"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            src={elias}
            alt="..."
          ></Image>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {userLogin
                ? pagesWithLogin.map((page) => (
                    <Link linkTo={`/${page.value}`}>
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    </Link>
                  ))
                : pages.map((page) => (
                    <Link linkTo={`/${page.value}`}>
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 15 }}
          >
            {userLogin
              ? pagesWithLogin.map((page) => (
                  <Link linkTo={`/${page.value}`}>
                    <Button
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                ))
              : pages.map((page) => (
                  <Link linkTo={`/${page.value}`}>
                    <Button
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                ))}
          </Box>
          {userLogin ? (
            <Grid sx={{ flexGrow: 0 }}>
              <Tooltip title="Cerrar sesion">
                <IconButton onClick={closeSession} sx={{ p: "20px" }}>
                  <GroupRemoveSharpIcon
                    sx={{ color: "#ffebee", mr: 5 }}
                    fontSize="large"
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          ) : (
            <Grid></Grid>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
