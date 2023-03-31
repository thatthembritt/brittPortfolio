import React from "react";
import projects from "../assets/projects.json";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Grid container>
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              xs={11}
              md={4}
              lg={3}
              sx={{
                backgroundColor: "#121212",
                marginX: 2,
                border: 0.25,
                borderColor: "#fcc931",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL + project.img}
                alt={project.name}
              />
              <CardContent>
                <Typography
                  fontFamily="Odibee Sans"
                  component="h6"
                  color="#fcc931"
                >
                  {project.name}
                </Typography>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <Typography fontFamily="Odibee Sans" color="#F3F5F9">
                    GitHub
                  </Typography>
                </a>
                <Typography fontFamily="Odibee Sans" color="#fcc931">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
