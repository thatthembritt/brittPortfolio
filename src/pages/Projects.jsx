import React from "react";
import projects from "../assets/projects.json";
import { Card, CardContent, Typography } from "@mui/material";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Typography
        fontFamily="Odibee Sans"
        component="h4"
        variant="h3"
        textTransform="uppercase"
      >
        Projects
      </Typography>
      {projects.map((project, index) => {
        return (
          <Card key={index}>
            <CardContent id="cardBackground">
              <Typography
                fontFamily="Odibee Sans"
                component="h6"
                color="#666769"
              >
                {project.name}
              </Typography>
              <a href={project.url} target="_blank" rel="noreferrer">
                <Typography fontFamily="Odibee Sans" color="#F3F5F9">
                  Link
                </Typography>
              </a>
              <Typography fontFamily="Odibee Sans" color="#666769">
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
