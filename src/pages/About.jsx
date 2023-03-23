import React from "react";
import { Typography, Grid } from "@mui/material";
import brittPic from "../assets/brittpic.png";

const title = "Title";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img
          src={brittPic}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "50%",
            marginLeft: 50,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          fontFamily="Odibee Sans"
          style={{ marginRight: 100 }}
        >
          FULL STACK WEB DEVELOPER
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
