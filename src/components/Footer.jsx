import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ bottom: 0, marginTop: 20 }} id="footer">
      <p>MORE HERE</p>
      <a
        href="https://github.com/thatthembritt"
        style={{ textDecoration: "none" }}
      >
        <Typography fontFamily="Odibee Sans" textTransform="uppercase">
          Github
        </Typography>
      </a>
      <a
        href="https://www.linkedin.com/in/britt-boyd-89731789/"
        style={{ textDecoration: "none" }}
      >
        <Typography fontFamily="Odibee Sans" textTransform="uppercase">
          LinkedIn
        </Typography>
      </a>
    </footer>
  );
};

export default Footer;
