import React from "react";
import { Typography } from "@mui/material";
import resume from "../assets/ResumeBrittBoyd.pdf";

const Resume = () => {
  return (
    <>
      <p>Resume</p>
      <a href={resume} target="_blank" rel="noreferrer">
        <Typography>Link</Typography>
      </a>
    </>
  );
};

export default Resume;
