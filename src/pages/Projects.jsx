import React from "react";
import projects from "../assets/projects.json";
import { Card, CardContent, Typography } from "@mui/material";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Typography fontFamily="Odibee Sans" component="h4" variant="h3">
        Projects
      </Typography>
      {projects.map((project, index) => {
        return (
          <Card key={index}>
            <CardContent id="cardBackground">
              <Typography fontFamily="Odibee Sans" component="h6">
                {project.name}
              </Typography>
              <a href={project.url}>
                <Typography fontFamily="Odibee Sans">Link</Typography>
              </a>
              <Typography fontFamily="Odibee Sans" color="black">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Projects;
