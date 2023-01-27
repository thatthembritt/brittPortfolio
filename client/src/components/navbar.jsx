import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Box sx={{ width: 2 / 5 }}>
        <Typography component="h1" variant="h3">
          Britt Boyd
        </Typography>
      </Box>
      <Box sx={{ width: 1 / 5 }}>
        <Typography component="span" variant="body1">
          <Link to="/Projects">Projects</Link>
        </Typography>
        <Typography component="span" variant="body1">
          <Link to="/Resume">Resume</Link>
        </Typography>
        <Typography component="span" variant="body1">
          <Link to="/Contact">Contact</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Navbar;
