import React from "react";
import { Typography, Grid } from "@mui/material";
import brittPic from "../assets/brittpic.jpg";

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
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" fontFamily="Odibee Sans">
          Britt Boyd is a recent graduate of the University of Denver Web
          Development Bootcamp. They plan to embark on a career in UX/UI Design
          after gaining hands-on experience in the field.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
