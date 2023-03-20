import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0 }} id="footer">
      <p>More Here</p>
      <a href="https://github.com/thatthembritt">
        <Typography fontFamily="Odibee Sans">Github</Typography>
      </a>
      <a href="https://www.linkedin.com/in/britt-boyd-89731789/">
        <Typography fontFamily="Odibee Sans">LinkedIn</Typography>
      </a>
      <a href="https://twitter.com/brittbcomedy">
        <Typography fontFamily="Odibee Sans">Twitter</Typography>
      </a>
    </footer>
  );
};

export default Footer;
