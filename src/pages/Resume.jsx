import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import resume from "../assets/brittboydcodingresume.pdf";
import Grid from "@mui/material/Unstable_Grid2";

const Resume = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={2}
      style={{ margin: "16px" }}
    >
      <Grid item>
        <Button
          href={resume}
          target="_blank"
          rel="noreferrer"
          variant="text"
          style={{
            fontFamily: "Odibee Sans",
            color: "#3f51b5",
            textDecoration: "none",
            cursor: "pointer",
            backgroundColor: "#fcc931",
            color: "black",
            size: "small",
            alignItems: "center",
            margin: 2,
          }}
          startIcon={<Download />}
        >
          DOWNLOAD RESUME
        </Button>
      </Grid>
      <Grid item>
        <Card
          style={{
            backgroundColor: "#fcc931",
            fontFamily: "Odibee Sans",
            color: "#3f51b5",
            textDecoration: "none",
            cursor: "pointer",
            backgroundColor: "#fcc931",
            color: "black",
            size: "small",
            alignItems: "center",
            margin: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Extracurricular Interests
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>Standup comedy</li>
                <li>Piano</li>
                <li>Comic books</li>
                <li>Weightlifting</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            backgroundColor: "#fcc931",
            fontFamily: "Odibee Sans",
            color: "#3f51b5",
            textDecoration: "none",
            cursor: "pointer",
            backgroundColor: "#fcc931",
            color: "black",
            size: "small",
            alignItems: "center",
            margin: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Education
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  2023
                  <br />
                  University of Denver
                  <br />A full time intensive program focused on gaining
                  technical programming skills in HTML5, CSS3, Javascript,
                  JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express,
                  Handelbars.js, and ReactJS.
                </li>
                <li>
                  2014
                  <br />
                  Eastern Kentucky University
                  <br />
                  Bachelor of Art's in Broadcasting & Film Technology
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            backgroundColor: "#fcc931",
            fontFamily: "Odibee Sans",
            color: "#3f51b5",
            textDecoration: "none",
            cursor: "pointer",
            backgroundColor: "#fcc931",
            color: "black",
            size: "small",
            alignItems: "center",
            margin: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Achievements
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  2022
                  <br />
                  Altercation Comedy Festival
                </li>
                <li>CloudTop Comedy Festival</li>
                <li>Semi-Finalist in Fort's Funniest Comedy Competition</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Resume;
