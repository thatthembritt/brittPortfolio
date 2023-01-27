import React from "react";
import projects from "../assets/projects.json";
import { Card, CardContent, Typography } from "@mui/material";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Typography component="h4" variant="h3">
        Projects
      </Typography>
      {projects.map((project, index) => {
        return (
          <Card key={index}>
            <CardContent>
              <Typography component="h6">{project.name}</Typography>
              <a href={project.url}>
                <Typography>Link</Typography>
              </a>
              <Typography color="purple">{project.description}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Projects;
