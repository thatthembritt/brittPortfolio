import React from "react";
import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const Navbar = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <Typography component="h1" variant="h3">
          Britt Boyd
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography component="span" variant="body1">
          <Link to="/Projects">Projects</Link>
        </Typography>
        <Typography component="span" variant="body1">
          <Link to="/Resume">Resume</Link>
        </Typography>
        <Typography component="span" variant="body1">
          <Link to="/Contact">Contact</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
