import React from "react";
import { Typography } from "@mui/material";
import brittPic from "../assets/brittboyd.png";
import Grid from "@mui/material/Unstable_Grid2";

const title = "Title";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <img
          src={brittPic}
          alt={title}
          style={{
            width: "100%",
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
          style={{ marginTop: 100 }}
        >
          FULL STACK WEB DEVELOPER & CREATIVE PERSON!
        </Typography>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          Britt Boyd is a Full Stack Web Developer based in Fort Collins,
          Colorado with a background in customer service and working in start-up
          environments.
        </Typography>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          With skills in JavaScript, React, Figma, & Canva (among others!),
          Britt excels in a fast-paced environment while maintaining an eye for
          details & task organization.
        </Typography>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          Outside of coding, Britt performs stand up comedy & is currently
          learning how to play the piano.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
