import React from "react";
import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const Navbar = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <Typography
          fontFamily="Odibee Sans"
          id="brittboyd"
          component="h1"
          variant="h1"
        >
          Britt
        </Typography>
        <Typography
          fontFamily="Odibee Sans"
          component="h1"
          variant="h1"
          id="brittboyd"
        >
          Boyd
        </Typography>
      </Grid>
      <Grid xs={6} id="navbarcontainer">
        <Typography
          fontFamily="Odibee Sans"
          component="span"
          variant="body1"
          id="navlink"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            About
          </Link>
        </Typography>
        <Typography
          fontFamily="Odibee Sans"
          component="span"
          variant="body1"
          id="navlink"
        >
          <Link to="/Projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </Typography>
        <Typography
          fontFamily="Odibee Sans"
          component="span"
          variant="body1"
          id="navlink"
        >
          <Link to="/Resume" style={{ textDecoration: "none" }}>
            Resume
          </Link>
        </Typography>
        <Typography
          fontFamily="Odibee Sans"
          component="span"
          variant="body1"
          id="navlink"
        >
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
