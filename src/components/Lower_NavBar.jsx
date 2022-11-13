//React Router
import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MedicationIcon from "@mui/icons-material/Medication";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const pages = ["About", "Research", "Medication"];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const ResponsiveAppBar = (props) => {
  return (
    <>
      <ElevationScroll {...props}>
        {/*allows positioned elements to act its relative psotion until scrolled which it becomes fixed*/}
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <MedicationIcon
                sx={{ display: { xs: "none", md: "flex" }, ml: 5 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  m: 1,
                  dislay: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Nutrition Medical Center
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Box>
              <MedicationIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
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
                Nutrition Medical Center
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    to={`/${page}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      key={page}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                ></Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default ResponsiveAppBar;
