import React from "react";
import { Typography } from "@mui/material";
import resume from "../assets/ResumeBrittBoyd.pdf";

const Resume = () => {
  return (
    <>
      <Typography
        variant="h3"
        fontFamily="Odibee Sans"
        style={{ marginRight: 100 }}
      >
        Resume
      </Typography>
      <a href={resume} target="_blank" rel="noreferrer">
        <Typography fontFamily="Odibee Sans">
          Click here to download Britt's resume
        </Typography>
      </a>
    </>
  );
};

export default Resume;
